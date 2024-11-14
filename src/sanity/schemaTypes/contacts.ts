import { defineType } from 'sanity';

export default defineType({
  name: 'contactInfo',
  type: 'document',
  title: 'Наши контакты',
  fields: [
    {
      name: 'phone',
      type: 'string',
      title: 'Телефон',
      description: 'Введите номер телефона',
      validation: (Rule) => Rule.required().error('Введите корректный номер телефона'),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Электронная почта',
      description: 'Введите адрес электронной почты',
      validation: (Rule) => Rule.required().email().error('Введите корректный адрес электронной почты'),
    },
    {
      name: 'officeAddress',
      type: 'object',
      title: 'Адрес офиса',
      fields: [
        { name: 'uz', type: 'string', title: 'Адрес (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Адрес (Русский)' },
        { name: 'en', type: 'string', title: 'Адрес (English)' },
      ],
      description: 'Введите адрес офиса на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля адреса должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'workingHours',
      type: 'object',
      title: 'Часы работы',
      fields: [
        { name: 'uz', type: 'string', title: 'Ish vaqti (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Часы работы (Русский)' },
        { name: 'en', type: 'string', title: 'Working Hours (English)' },
      ],
      description: 'Введите часы работы офиса на трёх языках',
      validation: (Rule) =>
        Rule.custom((fields: { uz?: string; ru?: string; en?: string }) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля времени работы должны быть заполнены';
          }
          return true;
        }),
    },
  ],
});
