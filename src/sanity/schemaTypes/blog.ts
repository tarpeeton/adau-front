import { defineType } from 'sanity';

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Блог',
  fields: [
    {
      name: 'category',
      type: 'reference',
      title: 'Категория',
      description: 'Выберите категорию для блога',
      to: [{ type: 'blogCategory' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'userImage',
      type: 'image',
      title: 'Изображение пользователя',
      description: 'Загрузите изображение пользователя',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userName',
      type: 'object',
      title: 'Имя пользователя',
      fields: [
        { name: 'uz', type: 'string', title: 'Ism (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Имя (Русский)' },
        { name: 'en', type: 'string', title: 'Name (English)' },
      ],
    },
    {
      name: 'userOccupation',
      type: 'object',
      title: 'Профессия пользователя',
      fields: [
        { name: 'uz', type: 'string', title: 'Kasbi (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Профессия (Русский)' },
        { name: 'en', type: 'string', title: 'Occupation (English)' },
      ],
    },
    {
      name: 'title',
      type: 'object',
      title: 'Заголовок',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля заголовка должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Автоматически сгенерированный slug',
      options: {
        source: 'title.en',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/--+/g, '-')
            .trim(),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Основное изображение',
      description: 'Загрузите основное изображение',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'object',
      title: 'Описание',
      fields: [
        { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
        { name: 'ru', type: 'text', title: 'Описание (Русский)' },
        { name: 'en', type: 'text', title: 'Description (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля описания должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'additionalContent',
      type: 'array',
      title: 'Дополнительные опции',
      of: [
        {
          type: 'object',
          title: 'Опция',
          fields: [
            {
              name: 'title',
              type: 'object',
              title: 'Заголовок',
              fields: [
                { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
                { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
                { name: 'en', type: 'string', title: 'Title (English)' },
              ],
              validation: (Rule) =>
                Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
                  if (!fields || !fields.uz || !fields.ru || !fields.en) {
                    return 'Все поля заголовка должны быть заполнены';
                  }
                  return true;
                }),
            },
            {
              name: 'description',
              type: 'object',
              title: 'Описание',
              fields: [
                { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
                { name: 'ru', type: 'text', title: 'Описание (Русский)' },
                { name: 'en', type: 'text', title: 'Description (English)' },
              ],
              validation: (Rule) =>
                Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
                  if (!fields || !fields.uz || !fields.ru || !fields.en) {
                    return 'Все поля описания должны быть заполнены';
                  }
                  return true;
                }),
            },
            {
              name: 'youtubeLink',
              type: 'url',
              title: 'Ссылка на YouTube',
              description: 'Введите ссылку на видео с YouTube',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }).error('Введите корректный URL-адрес'),
            },
          ],
        },
      ],
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Комментарии',
      of: [
        {
          type: 'reference',
          to: [{ type: 'comment' }],
        },
      ],
    },
    {
      name: 'popular',
      type: 'boolean',
      title: 'Популярный',
      description: 'Отметьте, если этот блог популярный',
      initialValue: false,
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Избранные статьи',
      description: 'Отметьте, если эта статья избранная',
      initialValue: false,
    },
    {
      name: 'expert',
      type: 'boolean',
      title: 'Экспертная статья',
      description: 'Отметьте, если эта статья написана экспертом',
      initialValue: false,
    },
  ],
});
