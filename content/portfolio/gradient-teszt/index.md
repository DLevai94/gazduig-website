---
date: 2020-07-23T19:12:46.146Z
thumbnail:
  - https://res.cloudinary.com/gazduig/image/upload/q_80/v1595514155/upsqr7dh78c5mndkozfl.png
title: Gradient teszt
slug: gradient-teszt
client: Gradientes Lajos
solutions: Dinamikus szinek
jobtime: Máma
gradient: linear-gradient(360deg, rgba(45,113,236,1) 0%,
  rgba(108,158,249,0.6334908963585435) 33%, rgba(247,247,247,0.3113620448179272)
  61%)
categories:
  - web
  - branding
images:
  - https://res.cloudinary.com/gazduig/image/upload/q_80/v1595514155/upsqr7dh78c5mndkozfl.png
  - https://res.cloudinary.com/gazduig/image/upload/q_80/v1595388903/sample.jpg
---


collections:

* name: portfolio
  label: Munka
  folder: content/portfolio
  create: true
  slug: '{{slug}}'
  path: '{{title}}/index'
  editor:
    preview: false
  fields:
        - { name: 'date', label: 'Dátum', widget: 'datetime' }
        - {
          name: 'thumbnail',
          label: 'Promo kép',
          widget: 'image',
          media_library: { config: { allow_multiple: false } },
          allow_multiple: false,
        }
        - { name: 'title', label: 'Cím' }
        - { name: 'slug', label: 'Slug' }
        - { name: 'client', label: 'Ügyfél' }
        - { name: 'solutions', label: 'Megoldások' }
        - { name: 'jobtime', label: 'Ekkor készült' }
        - { name: 'gradient', label: 'Gradient', required: false }
        - {
          name: 'categories',