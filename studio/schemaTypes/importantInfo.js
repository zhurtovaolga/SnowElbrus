import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'importantInfo',
    title: 'important info',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Заголовок секции',
            type: 'string',
            initialValue: 'Важная информация'
        }),

        defineField({
            name: 'equipment_center',
            title: 'Экипировачный центр',
            type: 'object',
            fields: [
                {
                    name: 'equipment_link',
                    title: 'Ссылка на экипировачный центр',
                    type: 'url'
                },
                {
                    name: 'equipment_name',
                    title: 'Название экипировачного центра',
                    type: 'string'
                },
                {
                    name: 'equipment_about',
                    title: 'Ифнормация о экипировачном центре',
                    type: 'string'
                },
            ]
        }),

        defineField({
            name: 'skiers_guide',
            title: 'Памятка горнолыжника',
            type: 'array',
            of: [{
                type: 'block',
            }]
        }),
    ],

    preview: {
        select: {
            title: 'title'
        }
    }
})