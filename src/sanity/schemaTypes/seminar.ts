import { defineType } from 'sanity';

export default defineType({
  name: 'seminar',
  title: 'Семинар',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'uz', title: 'Узбекский', type: 'string' },
        { name: 'en', title: 'Английский', type: 'string' }
      ],
      validation: Rule => Rule.required().error('Название обязательно для заполнения.')
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'uz', title: 'Узбекский', type: 'string' },
        { name: 'en', title: 'Английский', type: 'string' }
      ],
      validation: Rule => Rule.required().error('Описание обязательно для заполнения.')
    },
    {
      name: 'date',
      title: 'Дата',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD' // Форматирование даты
      },
      validation: Rule => Rule.required()
        .custom((date) => {
          if (typeof date === 'string') {
            const today = new Date().toISOString().split('T')[0];
            return date <= today || 'Дата должна быть сегодняшней или предыдущей.';
          }
          return 'Неверный формат даты.';
        })
        .error('Дата обязательна для заполнения.')
    },
    {
      name: 'time',
      title: 'Время',
      type: 'string',
      validation: Rule => Rule.required().error('Время обязательно для заполнения.')
    },
    {
      name: 'address',
      title: 'Адрес',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'uz', title: 'Узбекский', type: 'string' },
        { name: 'en', title: 'Английский', type: 'string' }
      ],
      validation: Rule => Rule.required().error('Адрес обязателен для заполнения.')
    },
    {
      name: 'status',
      title: 'Статус',
      type: 'string',
      options: {
        list: [
          { title: 'Новый', value: 'new' },
          { title: 'Старый', value: 'old' }
        ],
        layout: 'radio'
      },
      initialValue: 'new',
      validation: Rule => Rule.required().error('Статус обязателен для выбора.')
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('Изображение обязательно для загрузки.')
    },
    {
      name: 'video',
      title: 'Видео',
      type: 'object',
      description: 'Доступно только при статусе "Старый".',
      hidden: ({ document }) => document?.status !== 'old',
      fields: [
        {
          name: 'url',
          title: 'Ссылка на видео',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'youtube']
          }).error('Неверный формат ссылки на видео.')
        },
        {
          name: 'isFree',
          title: 'Бесплатное видео',
          type: 'boolean',
          initialValue: true,
          description: 'Укажите, является ли видео бесплатным.',
        },
        {
          name: 'price',
          title: 'Цена за видео',
          type: 'number',
          hidden: ({ parent }) => parent?.isFree,
          validation: Rule => Rule.min(0).error('Цена должна быть неотрицательной.')
        }
      ]
    },
    {
      name: 'seminarCategory',
      title: 'Категория семинара',
      type: 'reference',
      to: [{ type: 'seminarCategory' }],
      validation: Rule => Rule.required().error('Категория семинара обязательна для выбора.')
    },
    {
      name: 'priceData',
      title: 'Данные о стоимости',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название',
              type: 'object',
              fields: [
                { name: 'ru', title: 'Русский', type: 'string' },
                { name: 'uz', title: 'Узбекский', type: 'string' },
                { name: 'en', title: 'Английский', type: 'string' }
              ]
            },
            {
              name: 'options',
              title: 'Опции',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'price',
              title: 'Цена',
              type: 'number'
            }
          ]
        }
      ]
    },
    {
      name: 'speakers',
      title: 'Спикеры',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'speaker' }] }]
    },
    {
      name: 'seminarProgram',
      title: 'Программа семинара',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'speaker',
              title: 'Спикер',
              type: 'reference',
              to: [{ type: 'speaker' }]
            },
            {
              name: 'topic',
              title: 'Тема',
              type: 'string',
              validation: Rule => Rule.required().error('Тема обязательна для заполнения.')
            },
            {
              name: 'timeSlot',
              title: 'Временной интервал',
              type: 'string',
              validation: Rule => Rule.required().error('Временной интервал обязателен для заполнения.')
            }
          ]
        }
      ]
    },
    {
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {
        source: 'title.ru',
        maxLength: 200,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: Rule => Rule.required().error('Слаг обязателен для заполнения.')
    }
  ]
});
