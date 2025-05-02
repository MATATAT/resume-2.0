provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Resume"
      Environment = "Production"
      ManagedBy   = "Terraform"
    }
  }
}

// Need a us-east-1 region for ACM certificate with CloudFront
provider "aws" {
  alias  = "us-east"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "Resume"
      Environment = "Production"
      ManagedBy   = "Terraform"
    }
  }
}
