import { defineType } from 'sanity';

export default defineType({
  name: 'review',
  type: 'document',
  title: 'Отзывы',
  fields: [
    {
      name: 'category',
      type: 'reference',
      title: 'Категория',
      description: 'Выберите категорию отзыва',
      to: [{ type: 'reviewCategory' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'object',
      title: 'Имя',
      fields: [
        { name: 'uz', type: 'string', title: 'Ism (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Имя (Русский)' },
        { name: 'en', type: 'string', title: 'Name (English)' },
      ],
      description: 'Введите имя автора отзыва на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля имени должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'commentary',
      type: 'object',
      title: 'Комментарий',
      fields: [
        { name: 'uz', type: 'text', title: 'Izoh (Uzbek)' },
        { name: 'ru', type: 'text', title: 'Комментарий (Русский)' },
        { name: 'en', type: 'text', title: 'Commentary (English)' },
      ],
      description: 'Введите текст отзыва на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля комментария должны быть заполнены';
          }
          return true;
        }),
    },
  ],
});
