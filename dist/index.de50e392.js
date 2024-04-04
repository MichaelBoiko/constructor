const e=document.querySelector("#site");[{type:"title",value:"Hello"},{type:"text",value:"here we go with some text"},{type:"columns",value:["11111","22222","33333","44444"]},{type:"image",value:"./assets/image.png"}].forEach(s=>{let t="";"title"===s.type?t=`
        <div class="row">
            <div class="col-sm">
                <h1>${s.value}</h1>
            </div>
        </div>
    `:"text"===s.type?t=`
        <div class="row">
            <div class="col-sm">
                <p>${s.value}</p>
            </div>
        </div>
    `:"columns"===s.type?t=function(e){let s=e.value.map(e=>`<div class="col-sm"><p>${e}</p></div>`);return`
        <div class="row">
            ${s.join("")}
        </div>
    `}(s):"image"===s.type&&(t=`
        <div class="row">
            <div class="col-sm">
                <img src="${s.value}">
            </div>
        </div>
    `),e.insertAdjacentHTML("beforeend",t)});