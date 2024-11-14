import { defineType } from 'sanity';

interface MultiLangField {
  uz: string;
  ru: string;
  en: string;
}

export default defineType({
  name: 'teamMember',
  type: 'document',
  title: 'Наша команда',
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
      validation: (Rule) =>
        Rule.custom((fields: MultiLangField) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля имени должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'occupation',
      type: 'object',
      title: 'Профессия',
      fields: [
        { name: 'uz', type: 'string', title: 'Kasbi (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Профессия (Русский)' },
        { name: 'en', type: 'string', title: 'Occupation (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: MultiLangField) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля профессии должны быть заполнены';
          }
          return true;
        }),
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
      validation: (Rule) =>
        Rule.custom((fields: MultiLangField) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Все поля описания должны быть заполнены';
          }
          return true;
        }),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Фотография',
      description: 'Загрузите изображение участника команды',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
