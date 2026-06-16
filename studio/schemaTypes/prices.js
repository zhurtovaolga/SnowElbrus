import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'prices',
  title: 'Prices',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок секции',
      type: 'string',
      initialValue: 'Цены'
    }),

    defineField({
      name: 'seasons',
      title: 'Сезоны',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'seasonName',
              title: 'Название сезона',
              type: 'string',
              validation: Rule => Rule.required()
            }),

            defineField({
              name: 'groups',
              title: 'Тарифы',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'peopleCount',
                      title: 'Количество человек',
                      type: 'number'
                    }),

                    defineField({
                      name: 'oneHourPrice',
                      title: 'Цена за 1 час',
                      type: 'number'
                    }),

                    defineField({
                      name: 'twoHoursPrice',
                      title: 'Цена за 2 часа',
                      type: 'number'
                    }),

                    defineField({
                      name: 'threeHoursPrice',
                      title: 'Цена за 3 часа',
                      type: 'number'
                    })
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),

    defineField({
      name: 'note',
      title: 'Примечание',
      type: 'text',
      rows: 3
    })
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
})