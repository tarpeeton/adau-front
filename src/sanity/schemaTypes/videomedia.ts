import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'mediaVideo',
  type: 'document',
  title: 'Media Video',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Название (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'All language fields must be filled in';
          }
          return true;
        }),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'videoCategory' }],
      validation: (Rule) => Rule.required().error('Category must be selected'),
    },
    {
      name: 'mediaType',
      type: 'string',
      title: 'Media Type',
      options: {
        list: [
          { title: 'YouTube Link', value: 'url' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Media type must be selected'),
    },
    {
      name: 'videoUrl',
      type: 'url',
      title: 'YouTube Link',
      description: 'Provide a YouTube link',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }).error('Must be a valid URL'),
    },
  ],
});
