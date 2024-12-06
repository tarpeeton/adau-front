import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Блогы',
  description: 'Создание и редактирование статей блога',
  fields: [
    {
      name: 'category',
      type: 'reference',
      title: 'Категория статьи',
      description: 'Выберите тематическую категорию для статьи блога',
      to: [{ type: 'blogCategory' }],
      validation: (Rule) => Rule.required().error('Необходимо выбрать категорию для статьи'),
    },
    {
      name: 'userImage',
      type: 'image',
      title: 'Фото автора',
      description: 'Загрузите фотографию автора статьи. Рекомендуемый размер:90x90 пикселей',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userName',
      type: 'object',
      title: 'Имя автора',
      description: 'Введите имя автора статьи на трёх языках',
      fields: [
        { name: 'uz', type: 'string', title: 'Ism (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Имя (Русский)' },
        { name: 'en', type: 'string', title: 'Name (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Пожалуйста, введите имя автора на всех трёх языках';
          }
          return true;
        }),
    },
    {
      name: 'userOccupation',
      type: 'object',
      title: 'Должность автора',
      description: 'Укажите должность или специализацию автора на трёх языках',
      fields: [
        { name: 'uz', type: 'string', title: 'Kasbi (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Должность (Русский)' },
        { name: 'en', type: 'string', title: 'Occupation (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Пожалуйста, укажите должность автора на всех трёх языках';
          }
          return true;
        }),
    },
    {
      name: 'title',
      type: 'object',
      title: 'Заголовок статьи',
      description: 'Введите заголовок статьи на трёх языках. Заголовок должен быть кратким и информативным',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить заголовок статьи на всех трёх языках';
          }
          return true;
        }),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL статьи',
      description: 'Уникальный URL-адрес статьи. Генерируется автоматически из английского заголовка, но может быть отредактирован',
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
      validation: (Rule) => Rule.required().error('URL статьи обязателен для заполнения'),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Главное изображение',
      description: 'Загрузите основное изображение для статьи. Рекомендуемый размер: минимум 1200x630 пикселей',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Необходимо загрузить главное изображение для статьи'),
    },
    {
      name: 'description',
      type: 'object',
      title: 'Краткое описание',
      description: 'Введите краткое описание статьи на трёх языках. Это описание будет отображаться в превью статьи',
      fields: [
        { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
        { name: 'ru', type: 'text', title: 'Описание (Русский)' },
        { name: 'en', type: 'text', title: 'Description (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить краткое описание на всех трёх языках';
          }
          return true;
        }),
    },
    {
      name: 'additionalContent',
      type: 'array',
      title: 'Дополнительные блоки контента',
      description: 'Добавьте дополнительные разделы статьи с заголовками, описаниями и видео',
      of: [
        {
          type: 'object',
          title: 'Блок контента',
          fields: [
            {
              name: 'title',
              type: 'object',
              title: 'Подзаголовок раздела',
              description: 'Введите заголовок раздела на трёх языках',
              fields: [
                { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
                { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
                { name: 'en', type: 'string', title: 'Title (English)' },
              ],
              validation: (Rule) =>
                Rule.custom((fields: LanguageFields) => {
                  if (!fields || !fields.uz || !fields.ru || !fields.en) {
                    return 'Необходимо заполнить подзаголовок раздела на всех трёх языках';
                  }
                  return true;
                }),
            },
            {
              name: 'description',
              type: 'object',
              title: 'Содержание раздела',
              description: 'Введите содержание раздела на трёх языках',
              fields: [
                { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
                { name: 'ru', type: 'text', title: 'Описание (Русский)' },
                { name: 'en', type: 'text', title: 'Description (English)' },
              ],
              validation: (Rule) =>
                Rule.custom((fields: LanguageFields) => {
                  if (!fields || !fields.uz || !fields.ru || !fields.en) {
                    return 'Необходимо заполнить содержание раздела на всех трёх языках';
                  }
                  return true;
                }),
            },
            {
              name: 'youtubeLink',
              type: 'url',
              title: 'Видео для раздела',
              description: 'Вставьте ссылку на YouTube видео для этого раздела (необязательно)',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }).error('Пожалуйста, введите корректную ссылку на YouTube видео'),
            },
          ],
        },
      ],
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Комментарии к статье',
      description: 'Список комментариев, оставленных к данной статье',
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
      title: 'Популярная статья',
      description: 'Отметьте, если статья должна отображаться в разделе "Популярные статьи"',
      initialValue: false,
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Рекомендованная статья',
      description: 'Отметьте, если статья должна отображаться в разделе "Рекомендованные статьи"',
      initialValue: false,
    },
    {
      name: 'expert',
      type: 'boolean',
      title: 'Экспертная статья',
      description: 'Отметьте, если статья написана экспертом и должна иметь соответствующую метку',
      initialValue: false,
    },
  ],
});
