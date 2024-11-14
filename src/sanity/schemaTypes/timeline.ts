import { defineType } from 'sanity';

export default defineType({
  name: 'timeline',
  type: 'document',
  title: 'Таймлайн',
  fields: [
    {
      name: 'year',
      type: 'object',
      title: 'Год',
      fields: [
        { name: 'uz', type: 'string', title: 'Yil (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Год (Русский)' },
        { name: 'en', type: 'string', title: 'Year (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля года должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'plan',
      type: 'object',
      title: 'План',
      fields: [
        { name: 'uz', type: 'string', title: 'Reja (Uzbek)' },
        { name: 'ru', type: 'string', title: 'План (Русский)' },
        { name: 'en', type: 'string', title: 'Plan (English)' },
      ],
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'position',
      type: 'boolean',
      title: 'Расположение',
      description: 'Укажите расположение: сверху или снизу > По умолчанию снизу',
      initialValue: false, // Default is bottom
      options: {
        layout: 'checkbox',
      },
    },
  ],
});
