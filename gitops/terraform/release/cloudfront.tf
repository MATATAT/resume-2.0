module "acm_request_certificate" {
  source  = "cloudposse/acm-request-certificate/aws"
  version = "0.18.0"

  providers = {
    aws = aws.us-east
  }

  domain_name                       = var.domain_name
  process_domain_validation_options = true
  ttl                               = "300"
}

data "aws_route53_zone" "env" {
  name = var.domain_name
}

module "cdn" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "0.97.0"

  logging_enabled = false

  name                               = "cdn-${var.domain_name}"
  origin_bucket                      = module.s3_bucket.bucket_id
  aliases                            = ["${var.domain_name}"]
  acm_certificate_arn                = module.acm_request_certificate.arn
  dns_alias_enabled                  = true
  block_origin_public_access_enabled = true
  parent_zone_id                     = data.aws_route53_zone.env.id

  depends_on = [module.acm_request_certificate]
}
