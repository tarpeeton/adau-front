import { defineType } from 'sanity';

export default defineType({
  name: 'comment',
  type: 'document',
  title: 'Комментария Блога',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Текст комментария',
      description: 'Введите текст комментария',
      validation: (Rule) => Rule.required().min(1).error('Комментарий не может быть пустым'),
    },
    {
      name: 'blog',
      type: 'reference',
      title: 'Блог',
      to: [{ type: 'blog' }],
      description: 'Связанный блог для этого комментария',
      validation: (Rule) => Rule.required().error('Комментарий должен быть связан с блогом'),
    },
  ],
});
