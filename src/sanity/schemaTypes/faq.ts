export default {
  name: 'faq',
  title: 'Часто задаваемые вопросы',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Вопрос',
      type: 'object',
      fields: [
        { name: 'uz', title: 'Узбекский', type: 'string' },
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'en', title: 'Английский', type: 'string' },
      ],
    },
    {
      name: 'answer',
      title: 'Ответ',
      type: 'object',
      fields: [
        { name: 'uz', title: 'Узбекский', type: 'text' },
        { name: 'ru', title: 'Русский', type: 'text' },
        { name: 'en', title: 'Английский', type: 'text' },
      ],
    },
  ],
};
