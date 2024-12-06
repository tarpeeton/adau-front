import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'timeline',
  type: 'document',
  title: 'Наш путь и планы на будущее',
  fields: [
    {
      name: 'year',
      type: 'object',
      title: 'Год',
      fields: [
        { name: 'uz', type: 'string', title: 'Yil (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Год (Русский)' },
        { name: 'en', type: 'string', title: 'Year (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить год на всех языках';
          }
          return true;
        }),
    },
    {
      name: 'plan',
      type: 'object',
      title: 'Заголовок события',
      fields: [
        { name: 'uz', type: 'string', title: 'Reja (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
        { name: 'en', type: 'string', title: 'Plan (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить заголовок на всех языках';
          }
          return true;
        }),
    },
    {
      name: 'description',
      type: 'object',
      title: 'Описание события',
      fields: [
        { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
        { name: 'ru', type: 'text', title: 'Описание (Русский)' },
        { name: 'en', type: 'text', title: 'Description (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить описание на всех языках';
          }
          return true;
        }),
    },
    {
      name: 'position',
      type: 'boolean',
      title: 'Расположение блока',
      description: 'Выберите расположение блока: сверху или снизу (по умолчанию снизу)',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ],
});
