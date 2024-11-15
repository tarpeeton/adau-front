import { defineType } from 'sanity';

export default defineType({
  name: 'whyJoinAdau',
  title: 'Почему стоит стать членом ADAU?',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Заголовок',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      description: 'Введите заголовок на трех языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля заголовка должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'options',
      type: 'array',
      title: 'Опции',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'object',
              title: 'Имя опции',
              fields: [
                { name: 'uz', type: 'string', title: 'Имя (Uzbek)' },
                { name: 'ru', type: 'string', title: 'Имя (Русский)' },
                { name: 'en', type: 'string', title: 'Имя (English)' },
              ],
              validation: (Rule) =>
                Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
                  if (!fields || !fields.uz || !fields.ru || !fields.en) {
                    return 'Все поля имени опции должны быть заполнены';
                  }
                  return true;
                }),
            },
          ],
        },
      ],
      description: 'Введите список опций, каждая с именем на трех языках',
      validation: (Rule) =>
        Rule.required().min(1).error('Должен быть хотя бы один элемент в списке опций'),
    },
  ],
});
