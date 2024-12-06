import { defineType } from 'sanity';

interface LanguageFields {
  uz?: string;
  ru?: string;
  en?: string;
}

export default defineType({
  name: 'banner',
  type: 'document',
  title: 'Главный баннер',
  description: 'Настройка главного баннера на домашней странице',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Главный заголовок баннера',
      fields: [
        { name: 'uz', type: 'string', title: 'Sarlavha (Uzbek)' },
        { name: 'ru', type: 'string', title: 'Заголовок (Русский)' },
        { name: 'en', type: 'string', title: 'Title (English)' },
      ],
      description: 'Введите главный заголовок баннера на трёх языках. Этот текст будет отображаться крупным шрифтом на баннере',
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить заголовок на всех трёх языках';
          }
          return true;
        }),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Фоновое изображение',
      description: 'Загрузите изображение для фона баннера. Рекомендуемое разрешение: минимум 1920x1080 пикселей',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Необходимо загрузить фоновое изображение для баннера'),
    },
    {
      name: 'description',
      type: 'object',
      title: 'Подзаголовок баннера',
      fields: [
        { name: 'uz', type: 'text', title: 'Tavsif (Uzbek)' },
        { name: 'ru', type: 'text', title: 'Описание (Русский)' },
        { name: 'en', type: 'text', title: 'Description (English)' },
      ],
      description: 'Введите текст подзаголовка баннера на трёх языках. Этот текст будет отображаться под главным заголовком',
      validation: (Rule) =>
        Rule.custom((fields: LanguageFields) => {
          if (!fields || !fields.uz || !fields.ru || !fields.en) {
            return 'Необходимо заполнить подзаголовок на всех трёх языках';
          }
          return true;
        }),
    },
  ],
});
