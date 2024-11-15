import { defineType } from 'sanity';

export default defineType({
  name: 'seminarCategory',
  title: 'Категория семинара',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название категории',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string', validation: Rule => Rule.required().error('Название на русском обязательно для заполнения.') },
        { name: 'uz', title: 'Узбекский', type: 'string' },
        { name: 'en', title: 'Английский', type: 'string' }
      ]
    }
  ]
});
