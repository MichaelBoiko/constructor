import {row, col, css} from './utils';

function title(el){
    const {tag = 'h1', styles} = el.options;
    return row(col(`<${tag}>${el.value}</${tag}>`), css(styles));
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