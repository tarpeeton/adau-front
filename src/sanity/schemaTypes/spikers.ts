import { defineType } from 'sanity';

export default defineType({
  name: 'speaker',
  type: 'document',
  title: 'Спикеры',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Имя',
      fields: [
        { name: 'uz', type: 'string', title: 'Ism (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Имя (Русский)' },
        { name: 'en', type: 'string', title: 'Name (English)' },
      ],
      description: 'Введите имя спикера на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля имени должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
      description: 'Загрузите изображение спикера',
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
      description: 'Введите описание спикера на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля описания должны быть заполнены';
          }
          return true;
        }),
    },
  ],
});
