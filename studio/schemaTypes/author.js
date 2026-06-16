import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: 'badges',
      title: 'Краткая информация',
      type: 'array',
      of: [{ type: 'string' }]
    }),

    defineField({
      name: 'documents',
      title: 'Документы и сертификаты',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'document_name',
              title: 'Название документа',
              type: 'string'
            },
            {
              name: 'document_url',
              type: 'file'
            }
          ]
        }
      ]
    }),

    defineField({
      name: 'slides',
      title: 'Слайды',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Текст',
              type: 'array',
              of: [{
                type: 'block'
              }]
            }
          ]
        }
      ]
    }),

    defineField({
      name: 'lessonInfo',
      title: 'Как проходят занятия',
      type: 'array',
      of: [{
        type: 'block'
      }]
    }),

    defineField({
      name: 'lessonFormat',
      title: 'Формат занятий',
      type: 'array',
      of: [{
        type: 'block'
      }]
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})