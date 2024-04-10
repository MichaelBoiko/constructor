export function row(content, styles=''){
    return `
        <div class="row" style="${styles}">${content}</div>
    `
}
export function col(content){
    return `
        <div class="col-sm">${content}</div>
    `
}

//Преобразование объекта в строчку стилей
export function css(styles = {}){
    const objKeys = Object.keys(styles);
    const array = objKeys.map(key => {
        return `${key}: ${styles[key]}`;
    });
    return array.join(';');
}