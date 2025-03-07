import { defineType, defineField, defineArrayMember } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    // Basic details
    defineField({ name: 'title', type: 'string', title: 'Service Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'text', title: 'Description', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: ['Web Development', 'App Development', 'UI/UX Design', 'SEO & Marketing', 'Automation', 'Other'],
      },
    }),

    // Problem & Solution
    defineField({ name: 'problem', type: 'text', title: 'Problem We Solve', validation: (Rule) => Rule.required() }),
    defineField({ name: 'solution', type: 'text', title: 'Our Solution', validation: (Rule) => Rule.required() }),

    // Key Features
    defineField({
      name: 'features',
      type: 'array',
      title: 'Key Features',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(3),
    }),

    // Outcomes
    defineField({
      name: 'outcomes',
      type: 'array',
      title: 'Expected Outcomes (Results)',
      of: [{ type: 'string' }],
    }),

    // Visuals & SEO
    defineField({ name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true } }),
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
      category: 'category',
      media: 'mainImage',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: `Category: ${category || 'Uncategorized'}`,
        media,
      };
    },
  },
});