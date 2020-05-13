// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const TITLE = 'Blog VuejsID'
const SHORT_TITLE = 'VuejsID'
const DESC =
  'Sebuah blog dari VuejsID yang membahas berbagai hal mengenai Vue.js dan ekosistemnya'
const SITE_URL = 'https://blog.vuejs.id'

module.exports = {
  siteName: TITLE,
  siteDescription: DESC,
  siteUrl: SITE_URL,

  templates: {
    Post: '/:title',
    Tag: '/tag/:title',
    Author: '/author/:title'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          },
          author: {
            typeName: 'Author',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-166364803-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: [],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: TITLE,
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        shortName: SHORT_TITLE,
        themeColor: '#E12A43',
        backgroundColor: '#ffffff',
        icon: './static/logo.png',
        cachedFileTypes: 'js,json,css,png,jpg,jpeg,svg',
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ['Post'],
        // Optional: any properties you wish to set for `Feed()` constructor
        // See https://www.npmjs.com/package/feed#example for available properties
        feedOptions: {
          title: TITLE,
          description: DESC
        },
        // === All options after this point show their default values ===
        // Optional; opt into which feeds you wish to generate, and set their output path
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        },
        // Optional: the maximum number of items to include in your feed
        maxItems: 25,
        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        htmlFields: ['description', 'content'],
        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: false,
        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        filterNodes: node => true,
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: node => ({
          title: node.title,
          date: node.date || new Date(),
          content: node.content
        })
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs']
    }
  }
}
