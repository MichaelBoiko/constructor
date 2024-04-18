export class Site {
    constructor(selector){
        this.el = document.querySelector(selector);
    }

    render(model){
        model.forEach(el => {
            this.el.insertAdjacentHTML('beforeend', el.toHTML());
        })
    }
}