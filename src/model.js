import image from './assets/image.png';

export const model = [
    {type: 'title', value: 'Конструктор сайтов на JavaScript', options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(#e66465, #9198e5);',
            'text-align': 'center',
            padding: '1.5rem',
        }
    }},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
        '11111',
        '22222',
        '33333',
        '44444'
    ]},
    {type: 'image', value: image}
]