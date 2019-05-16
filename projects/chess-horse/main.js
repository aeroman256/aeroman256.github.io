const draw = () => {
    let fieldX = 8;
    let fieldY = 8;
    let res = "";
    let count = 0;
    for(i = 0; i < fieldX; i++){
        for(j = 0; j < fieldY; j++){
            if(count % 2 == 0) {
                res += `<div class="chess-block bg-black" data-x="${j}" data-y ="${i}"></div>`
            } else {
                res += `<div class="chess-block" data-x="${j}" data-y ="${i}"s></div>`;
            }
            count++
        }
        count++
    }
    
    document.querySelector('#field').innerHTML = res;
    document.querySelectorAll(".chess-block").forEach((el) => {
        el.onclick = horse;
    })   
}

function horse () {
    document.querySelectorAll(".chess-block").forEach(function(el) {
        el.classList.remove("bg-green");
        el.classList.remove("active");
    })
    let x = this.dataset.x;
    let y = this.dataset.y;
    document.querySelector(`.chess-block[data-x="${x}"][data-y ="${y}"]`).classList.add("bg-green")
    if (+x + 2 < 8 && +y + 1 < 8){
        document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y ="${+y + 1}"]`).classList.add("active")
    }
    if (+x + 2 < 8 && +y - 1 >= 0){
        document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y ="${+y - 1}"]`).classList.add("active")
    }
    if (+x - 2 >= 0  && +y + 1 < 8){
        document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y ="${+y + 1}"]`).classList.add("active")
    }
    if (+x - 2 >= 0 && +y - 1 >= 0){
        document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y ="${+y - 1}"]`).classList.add("active")
    }
    if (+x + 1 < 8 && +y + 2 < 8){
        document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y ="${+y + 2}"]`).classList.add("active")
    }
    if (+x - 1 >= 0 && +y + 2 < 8){
        document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y ="${+y + 2}"]`).classList.add("active")
    }
    if (+x + 1 < 8 && +y - 2 >= 0){
        document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y ="${+y - 2}"]`).classList.add("active")
    }
    if (+x - 1 >= 0 && +y - 2 >= 0){
        document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y ="${+y - 2}"]`).classList.add("active")
    }
}


draw ();