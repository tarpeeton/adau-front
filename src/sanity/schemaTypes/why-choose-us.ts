import { defineType } from 'sanity';

export default defineType({
  name: 'whyChooseUs',
  title: 'Почему выбирают нас?',
  type: 'document',
  fields: [
    {
      name: 'number',
      type: 'string',
      title: 'Номер',
      description: 'Введите номер в формате: 01, 02, 03... до 20',
      initialValue: '01',
      validation: (Rule) =>
        Rule.required()
          .regex(/^(0[1-9]|1[0-9]|20)$/)
          .error('Номер должен быть в формате 01-20'),
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
    }
  ],
});