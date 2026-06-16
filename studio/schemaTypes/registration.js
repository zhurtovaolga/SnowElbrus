import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'registration',
    title: 'Registration',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Заголовок секции',
            type: 'string',
            initialValue: 'Регистрация'
        }),

        defineField({
            name: 'telegram_link',
            title: 'Ссылка на telegram',
            type: 'url',
        }),

        defineField({
            name: 'google_form_link',
            title: 'Ссылка на google form',
            type: 'url',
        }),

        defineField({
            name: 'phone_number',
            title: 'Номер телефона',
            type: 'string',
        }),
    ],

    preview: {
        select: {
            title: 'title'
        }
    }
})