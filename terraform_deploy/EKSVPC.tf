resource "aws_vpc" "main" {
    cidr_block = "172.0.0.0/16"
    instance_tenancy = "default"

    tags{
        Name = "eks_cluster_vpc"
        Purpose = "provisionig eks cluster"
    }
}   

   