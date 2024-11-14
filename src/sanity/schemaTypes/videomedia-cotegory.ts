import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'videoCategory',
  type: 'document',
  title: 'Категория - Видео',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Название категории',
      fields: [
        { name: 'uz', type: 'string', title: 'Nom (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Название (Русский)' },
        { name: 'en', type: 'string', title: 'Name (English)' },
      ],
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'All language fields must be filled in';
          }
          return true;
        }),
    },
  ],
});
