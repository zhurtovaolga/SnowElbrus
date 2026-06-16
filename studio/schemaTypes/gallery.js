import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок секции',
      type: 'string',
      initialValue: 'Фотогалерея',
    }),

    defineField({
      name: 'images',
      title: 'Фотогалерея',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
})
