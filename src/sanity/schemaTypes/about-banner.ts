import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'aboutBanner',
  type: 'document',
  title: 'Баннер страницы "О нас"',
  description: 'Настройка баннера для страницы о компании',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Заголовок баннера',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      description: 'Введите основной заголовок баннера на трёх языках. Этот текст будет отображаться в верхней части страницы "О нас"',
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Пожалуйста, заполните заголовок на всех трёх языках (узбекский, русский, английский)';
          }
          return true;
        }),
    },
    {
      name: 'description',
      type: 'object',
      title: 'Описание компании',
      fields: [
        { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
        { name: 'ru', type: 'text', title: 'Описание (Русский)' },
        { name: 'en', type: 'text', title: 'Description (English)' },
      ],
      description: 'Введите краткое описание компании на трёх языках. Этот текст будет отображаться под заголовком и должен содержать основную информацию о компании',
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Пожалуйста, заполните описание компании на всех трёх языках (узбекский, русский, английский)';
          }
          return true;
        }),
    },
    {
      name: 'video',
      type: 'url',
      title: 'Видео о компании',
      description: 'Вставьте ссылку на корпоративное видео с YouTube. Видео будет отображаться в баннере страницы "О нас". Пример ссылки: https://youtube.com/watch?v=XXXXX',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        })
        .required()
        .error('Пожалуйста, вставьте корректную ссылку на видео YouTube. Ссылка должна начинаться с http:// или https://'),
    },
  ],  
});
