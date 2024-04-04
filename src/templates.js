function title(el){
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${el.value}</h1>
            </div>
        </div>
    `
}

function text(el){
    return `
        <div class="row">
            <div class="col-sm">
                <p>${el.value}</p>
            </div>
        </div>
    `
}

function columns(el){
    const html = el.value.map(item => `<div class="col-sm"><p>${item}</p></div>`);
    return `
        <div class="row">
            ${html.join('')}
        </div>
    `
}

function image(el){
    return `
        <div class="row">
            <div class="col-sm">
                <img src="${el.value}">
            </div>
        </div>
    `
}

export const templates = {
    title,
    text,
    columns,
    image
}