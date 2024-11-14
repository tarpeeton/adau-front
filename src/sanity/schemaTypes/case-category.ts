// /schemas/caseCategory.js
export default {
    name: 'caseCategory',
    title: 'Категория кейсов',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Название категории Кейса',
        type: 'object',
        fields: [
          { name: 'en', title: 'Английский', type: 'string' },
          { name: 'ru', title: 'Русский', type: 'string' },
          { name: 'uz', title: 'Узбекский', type: 'string' },
        ],
      },
    ],
}
