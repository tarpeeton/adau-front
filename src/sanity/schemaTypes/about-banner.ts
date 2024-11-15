import { defineType } from 'sanity';

export default defineType({
  name: 'aboutBanner',
  type: 'document',
  title: 'О нас баннере',
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
      description: 'Введите заголовок на трёх языках',
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
      description: 'Введите описание на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля описания должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'video',
      type: 'url',
      title: 'Ссылка на YouTube видео',
      description: 'Введите ссылку на YouTube видео для баннера',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        })
        .required()
        .error('Введите действительную ссылку на видео YouTube'),
    },
  ],
});
