export default {
  name: 'howWeWork',
  title: 'Как мы работаем',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'object',
      fields: [
        { name: 'uz', title: 'Узбекский', type: 'string' },
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'en', title: 'Английский', type: 'string' },
      ],
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'object',
      fields: [
        { name: 'uz', title: 'Узбекский', type: 'text' },
        { name: 'ru', title: 'Русский', type: 'text' },
        { name: 'en', title: 'Английский', type: 'text' },
      ],
    },
  ],
};
