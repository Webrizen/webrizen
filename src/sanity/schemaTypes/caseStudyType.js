import { defineType, defineField, defineArrayMember } from 'sanity';

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // Basic details
    defineField({ name: 'title', type: 'string', title: 'Case Study Title', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'client', type: 'string', title: 'Client Name', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'industry',
      type: 'string',
      title: 'Industry',
      options: { list: ['Technology', 'Education', 'Healthcare', 'Finance', 'Retail', 'Other'] },
    }),

    
    // Project details
    defineField({ name: 'overview', type: 'text', title: 'Project Overview', validation: (Rule) => Rule.required() }),

    // Problems & Solutions
    defineField({ name: 'challenge', type: 'text', title: 'Client Challenge', validation: (Rule) => Rule.required() }),
    defineField({ name: 'approach', type: 'text', title: 'Our Approach', validation: (Rule) => Rule.required() }),

    // Key Results
    defineField({
      name: 'results',
      type: 'array',
      title: 'Key Results',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({ name: 'body', type: 'blockContent', title: 'Full Case Study', validation: (Rule) => Rule.required() }),

    // Related Services
    defineField({
      name: 'relatedServices',
      type: 'array',
      title: 'Related Services',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),

    // Visuals & SEO
    defineField({ name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true } }),
    defineField({ name: 'gallery', type: 'array', title: 'Gallery', of: [{ type: 'image' }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title', validation: (Rule) => Rule.max(60) }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 3, validation: (Rule) => Rule.max(160) }),
    defineField({
      name: 'seoKeywords',
      type: 'array',
      title: 'SEO Keywords',
      of: [{ type: 'string' }],
    }),

    // Meta
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At', validation: (Rule) => Rule.required() }),
  ],

  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'mainImage',
    },
    prepare({ title, client, media }) {
      return {
        title,
        subtitle: `Client: ${client || 'N/A'}`,
        media,
      };
    },
  },
});