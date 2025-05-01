terraform {
  required_version = ">= 1.0.0"

  backend "s3" {
    bucket       = "mattmacdonald-resume-terraform-state-bucket"
    key          = "terraform/release.tfstate"
    region       = "us-west-2"
    encrypt      = true
    use_lockfile = true
  }
}

data "terraform_remote_state" "core" {
  backend = "s3"
  config = {
    bucket = "mattmacdonald-resume-terraform-state-bucket"
    key    = "terraform/core.tfstate"
    region = "us-west-2"
  }
}
