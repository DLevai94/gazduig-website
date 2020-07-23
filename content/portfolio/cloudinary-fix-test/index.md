---
date: 2020-07-22T04:04:15.594Z
thumbnail:
  - https://res.cloudinary.com/gazduig/image/upload/q_80/v1595514155/upsqr7dh78c5mndkozfl.png
title: Cloudinary fix test
slug: cloudinary-fix-test
client: Cloudinary
jobtime: 2020 Julius
gradient: a
solutions: Kepkezeles
categories:
  - all
  - web
images:
  - https://res.cloudinary.com/gazduig/image/upload/q_80/v1595388903/sample.jpg
  - https://res.cloudinary.com/gazduig/image/upload/q_80/v1595514830/Screenshot_2020-07-01_at_20.13.39_xmzyn1.png
---
Although this setup exposes the `cloud_name` and `api_key` publicly via the `/admin/config.yml` endpoint, this information is not sensitive. Any integration of the Cloudinary media library requires this information to be exposed publicly. To use this library or use the restricted Cloudinary API endpoints, the user must have access to the Cloudinary account login details or the `api_secret` associated with the `cloud_name` and `api_key`.