provider "aws" {
  region = local.aws_region

  default_tags {
    tags = {
      Project     = "Resume"
      Environment = "Production"
      ManagedBy   = "Terraform"
    }
  }
}
