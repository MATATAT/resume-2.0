provider "aws" {
  region = "us-west-2"

  default_tags {
    tags = {
      Project     = "Resume"
      Environment = "Production"
      ManagedBy   = "Terraform"
    }
  }
}
