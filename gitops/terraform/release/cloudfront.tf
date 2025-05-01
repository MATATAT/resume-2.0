module "acm_request_certificate" {
  source  = "cloudposse/acm-request-certificate/aws"
  version = "0.18.0"

  domain_name                       = local.domain_name
  process_domain_validation_options = true
  ttl                               = "300"
}

data "aws_route53_zone" "env" {
  name = local.domain_name
}

module "cdn" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "0.97.0"

  logging_enabled = false

  name                               = "cdn-${local.domain_name}"
  origin_bucket                      = module.s3_bucket.bucket_id
  aliases                            = ["cdn.${local.domain_name}"]
  dns_alias_enabled                  = true
  block_origin_public_access_enabled = true
  parent_zone_id                     = data.aws_route53_zone.env.id
}
