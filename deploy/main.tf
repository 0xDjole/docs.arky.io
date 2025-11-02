resource "cloudflare_pages_project" "docs" {
  account_id        = var.CLOUDFLARE_ACCOUNT_ID
  name              = "arky-docs"
  production_branch = "master"

  build_config {
    build_command   = "npm run build"
    destination_dir = "dist"
  }

  source {
    type = "github"
    config {
      owner                         = var.GITHUB_OWNER
      repo_name                     = var.GITHUB_REPO
      production_branch             = "master"
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "all"
      preview_branch_includes       = ["*"]
    }
  }

  deployment_configs {
    production {
      environment_variables = {
        NODE_VERSION = "18"
      }
    }
  }
}

resource "cloudflare_pages_domain" "docs_domain" {
  account_id   = var.CLOUDFLARE_ACCOUNT_ID
  project_name = cloudflare_pages_project.docs.name
  domain       = "docs.${var.ROOT_DOMAIN}"
}

resource "cloudflare_record" "docs_domain" {
  zone_id = var.CLOUDFLARE_ZONE_ID
  name    = "docs"
  content = "${cloudflare_pages_project.docs.name}.pages.dev"
  type    = "CNAME"
  ttl     = 1
  proxied = true
}
