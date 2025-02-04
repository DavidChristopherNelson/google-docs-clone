provider "aws" {
  region = var.region
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.0.0"   # Pinning the module version to 18.3.0
  cluster_name    = var.cluster_name
  cluster_version = "1.24"
  vpc_id          = module.vpc.vpc_id

  # Use subnet_ids as per the documentation for this version.
  subnet_ids      = module.vpc.private_subnets

  # Use eks_managed_node_groups for managed node groups.
  eks_managed_node_groups = {
    default = {
      desired_capacity = var.desired_capacity
      max_capacity     = var.desired_capacity + 1
      min_capacity     = var.desired_capacity
      instance_types   = [var.node_instance_type]
    }
  }
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "google-docs-clone-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["${var.region}a", "${var.region}b", "${var.region}c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
}
