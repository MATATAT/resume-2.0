variable "app_name" {
  description = "Name of the application"
  type        = string
}

variable "aws_region" {
  description = "AWS region to deploy the application"
  type        = string
}

variable "github_owner" {
  description = "GitHub owner of the repository"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
}

variable "github_branch" {
  description = "GitHub branch name"
  type        = string
}

variable "domain_name" {
  description = "Domain name for the application"
  type        = string
}
