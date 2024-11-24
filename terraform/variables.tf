# Sets global variables for this Terraform project.

variable "app_name" {
}

variable "location" {
  default = "westus2"
}

variable "kubernetes_version" {
}

variable "environment" {}

locals {
  app_name = "flixtube-${var.environment}"
}
