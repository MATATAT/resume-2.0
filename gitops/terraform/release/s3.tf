module "s3_bucket" {
  source    = "cloudposse/s3-bucket/aws"
  version   = "4.10.0"
  namespace = "resume"
  name      = "mattmacdonald.link-website"

  enabled            = true
  user_enabled       = false
  versioning_enabled = false
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:GetObjectAcl",
    ]
    resources = ["${module.s3_bucket.bucket_arn}/*"]
  }
}

data "aws_iam_policy_document" "deployment_policy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
    ]
    resources = ["${module.s3_bucket.bucket_arn}/*"]
  }
}

resource "aws_iam_policy" "deployment_policy" {
  name        = "GHA_s3_deployment_policy"
  description = "GitHub Actions Deployment Policy"
  policy      = data.aws_iam_policy_document.deployment_policy.json
}

resource "aws_iam_policy_attachment" "s3-attachment" {
  name       = "GHA_s3_deployment_policy_attachment"
  policy_arn = aws_iam_policy.deployment_policy.arn
  roles      = [aws_iam_role.iam_role.name]
}
