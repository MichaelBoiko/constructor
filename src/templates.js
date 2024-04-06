import {row, col} from './utils';

function title(el){
    return row(col(`<h1>${el.value}</h1>`));
}

function text(el){
    return row(col(`<p>${el.value}</p>`));
}

function columns(el){
    const html = el.value.map(item => col(item));
    return row(html.join(''));
}

function image(el){
    return row(col(`<img src="${el.value}">`));
}

export const templates = {
    title,
    text,
    columns,
    image
}