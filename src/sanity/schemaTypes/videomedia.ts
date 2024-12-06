import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'mediaVideo',
  type: 'document',
  title: 'Медиа Видео',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Заголовок',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Название (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все языковые поля должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Категория',
      to: [{ type: 'videoCategory' }],
      validation: (Rule) => Rule.required().error('Необходимо выбрать категорию'),
    },
    {
      name: 'mediaType',
      type: 'string',
      title: 'Тип медиа',
      options: {
        list: [
          { title: 'Ссылка на YouTube', value: 'url' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Необходимо выбрать тип медиа'),
    },
    {
      name: 'videoUrl',
      type: 'url',
      title: 'Ссылка на YouTube',
      description: 'Укажите ссылку на YouTube',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }).error('Должна быть действительная ссылка'),
    },
  ],
});
