import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(cloudinary);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'gazduig/Gazduig-Creative-Agency-Website',
      branch: 'master',
    },
    media_library: {
      name: 'cloudinary',
      config: {
        cloud_name: 'gazduig',
        api_key: '178913774827294',
        multiple: true,
        allow_multiple: true,
        default_transformations: [
          [
            {
              quality: 80,
            },
          ],
        ],
      },
    },
    media_folder: 'static/assets',
    public_folder: '/assets',
    locale: 'hu',
    collections: [
      {
        name: 'portfolio',
        label: 'Munka',
        folder: 'content/portfolio',
        create: true,
        slug: '{{slug}}',
        path: '{{title}}/index',
        fields: [
          { name: 'date', label: 'Dátum', widget: 'datetime' },
          { name: 'thumbnail', label: 'Promo kép', widget: 'image', allow_multiple: false },
          { name: 'title', label: 'Cím' },
          { name: 'slug', label: 'Slug' },
          { name: 'client', label: 'Ügyfél' },
          { name: 'solutions', label: 'Megoldások' },
          { name: 'jobtime', label: 'Ekkor készült' },
          { name: 'gradient', label: 'Gradient', required: false },
          {
            name: 'categories',
            label: 'Kategória',
            widget: 'select',
            options: ['all', 'branding', 'web', 'print', 'copy', 'social', 'ig'],
            multiple: true,
          },
          {
            name: 'images',
            label: 'Képek',
            widget: 'image',
            media_library: { config: { multiple: true } },
            multiple: true,
            allow_multiple: true,
          },
          { label: 'Tartalom', name: 'body', widget: 'markdown' },
        ],
      },
    ],
  },
});
