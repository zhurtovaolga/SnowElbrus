import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    defineField({
      name: 'intro_title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'intro_subtitle',
      title: 'Подзаголовок',
      type: 'string',
    }),
    defineField({
      name: 'title_image',
      title: 'Фоновое изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'intro_title',
      media: 'title_image',
    },
  },
})
