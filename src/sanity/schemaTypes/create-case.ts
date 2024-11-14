import { defineType } from 'sanity'

export default defineType({
  name: 'case',
  title: 'Кейс',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'object',
      fields: [
        { name: 'en', title: 'Английский', type: 'string' },
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'uz', title: 'Узбекский', type: 'string' },
      ],
    },
    {
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
    },
    {
      name: 'caseCategory',
      title: 'Категория',
      type: 'reference',
      to: [{ type: 'caseCategory' }],
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'object',
      fields: [
        { name: 'en', title: 'Английский', type: 'text' },
        { name: 'ru', title: 'Русский', type: 'text' },
        { name: 'uz', title: 'Узбекский', type: 'text' },
      ],
    },
    {
      name: 'aboutText',
      title: 'О проекте',
      type: 'object',
      fields: [
        { name: 'en', title: 'Английский', type: 'text' },
        { name: 'ru', title: 'Русский', type: 'text' },
        { name: 'uz', title: 'Узбекский', type: 'text' },
      ],
    },
    {
      name: 'slider',
      title: 'Слайдер',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.max(4).error('Вы можете загрузить не более 4 изображений.'),
    },
    {
      name: 'youtubeVideo',
      title: 'YouTube видео',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).error('Пожалуйста, введите правильную ссылку на видео YouTube.'),
    },
    {
      name: 'tasks',
      title: 'Задачи множество',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'en', title: 'Английский', type: 'text' },
            { name: 'ru', title: 'Русский', type: 'text' },
            { name: 'uz', title: 'Узбекский', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'solutions',
      title: 'Решения множество',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'en', title: 'Английский', type: 'text' },
            { name: 'ru', title: 'Русский', type: 'text' },
            { name: 'uz', title: 'Узбекский', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'results',
      title: 'Результаты множество',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'object',
              fields: [
                { name: 'en', title: 'Английский', type: 'string' },
                { name: 'ru', title: 'Русский', type: 'string' },
                { name: 'uz', title: 'Узбекский', type: 'string' },
              ],
            },
            {
              name: 'result',
              title: 'Описание',
              type: 'object',
              fields: [
                { name: 'en', title: 'Английский', type: 'text' },
                { name: 'ru', title: 'Русский', type: 'text' },
                { name: 'uz', title: 'Узбекский', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'isFeatured',
      title: 'Лучшие кейсы',
      type: 'boolean',
      description: 'Показать этот кейс в разделе "Лучшие кейсы".',
    },
  ],
})
