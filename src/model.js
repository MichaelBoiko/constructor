import image from './assets/image.png';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks';

export const model = [
    new TitleBlock('Конструктор сайтов на JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(#e66465, #9198e5)',
            'text-align': 'center',
            padding: '1.5rem',
            color: '#fff',
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
            'border-radius': '50px',
        }
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, consequuntur.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deleniti vel!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam nihil quam eum, eos ipsum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, expedita. Laboriosam, iure.'
    ], {
        styles: {
            background: 'linear-gradient(#e66465, #9198e5)',
            'text-align': 'center',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
        }
    }),
    new TextBlock(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
    consequuntur deleniti, veritatis nihil officiis voluptas odit asperiores cum mollitia quam nemo 
    reprehenderit cumque!`, {
        styles: {
            background: 'linear-gradient(#f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
            'text-align': 'center',
        }
    })
]