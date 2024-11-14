import { defineType } from 'sanity';

export default defineType({
  name: 'blogCategory',
  type: 'document',
  title: 'Категория блога',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Название категории',
      fields: [
        { name: 'uz', type: 'string', title: 'Nomi (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Название (Русский)' },
        { name: 'en', type: 'string', title: 'Name (English)' },
      ],
      description: 'Введите название категории на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение категории',
      description: 'Загрузите изображение для категории',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
