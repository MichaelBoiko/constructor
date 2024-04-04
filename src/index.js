const model = [
    {type: 'title', value: 'Hello'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
        '11111',
        '22222',
        '33333',
        '44444'
    ]},
    {type: 'image', value: './assets/image.png'}
]

const site = document.querySelector('#site');

model.forEach(el => {
    let html = '';
    if(el.type === 'title'){
        html = title(el);
    } else if (el.type === 'text'){
        html = text(el);
    } else if (el.type === 'columns'){
        html = columns(el);
    }else if (el.type === 'image'){
        html = image(el);
    }
    site.insertAdjacentHTML('beforeend', html);
})

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