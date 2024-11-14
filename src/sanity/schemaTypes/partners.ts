import { defineType } from 'sanity';

export default defineType({
  name: 'partner',
  type: 'document',
  title: 'Партнёры',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название партнёра',
      description: 'Введите название партнёра',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
      description: 'Загрузите изображение партнёра',
      options: {
        hotspot: true, // Enables image hotspot selection
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
