import {row, col, css} from './utils';

function title(el){
    const {tag = 'h1', styles} = el.options;
    return row(col(`<${tag}>${el.value}</${tag}>`), css(styles));
}

function text(el){
    return row(`<p>${el.value}</p>`, css(el.options.styles));
}

function columns(el){
    const html = el.value.map(item => col(item));
    return row(html.join(''), css(el.options.styles));
}

function image(el){
    const {imageStyles, alt='', styles} = el.options;
    return row(`<img src="${el.value}" alt="${alt}" style="${css(imageStyles)}">`, css(styles));
}

export const templates = {
    title,
    text,
    columns,
    image
}