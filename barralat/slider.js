//npm install jquery
let menu = document.getElementById('menu')
let closem = document.getElementById('close')
let menuc = 0


function bar() {
    if (menuc == 0) {
        menu.style.display = 'inline'
        const style = document.createElement('style');
        style.innerHTML = `
               @keyframes anime{
                    0%{transform: translate(0, 0)}
                    100%{transform: translate(-100%, 0);}
                }
            `;
        document.head.appendChild(style);
        
        menuc = 1
    } else {
        menu.style.display = 'none'
        menuc = 0
    }
}
 function fecharmenu() {
        menu.style.display = 'none'
        menuc = 0
}

