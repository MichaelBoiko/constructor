import {model} from './model';
import {templates} from './templates';
import './styles/main.css';

const site = document.querySelector('#site');
model.forEach(el => {
    const toHTML = templates[el.type];
    site.insertAdjacentHTML('beforeend', toHTML(el));
});