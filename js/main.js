//pego os dados que preciso:
let slogan_input = document.querySelector('#slogan');
let mySlogans = document.querySelector('#my-slogans');
let btn = document.querySelector('#btn-publish');
let icon = document.querySelector('.iconStar');

//contador pra dar um ID a cada frase:
let counter = 0;

function publish() {

    //pegar oq foi digitado no input:
    let slogan = slogan_input.value;

    //vejo se o campo não é nulo:
    if ((slogan != '') && (slogan != null) && (slogan != undefined)) {

        //assim adiciona mais um item na tarefa...
        ++counter;

        //crio os a div:
        let div_slogan = `
        <div class="box-slogan" id="${counter}">
            <i class="fa-solid fa-heart heart"></i>
            <div>
                <p class="text">"${slogan}"</p>
            </div>
        <div class="btn-div">
            <button onclick="fav()" class="fav">
                <i class="fa-regular fa-star iconStar"></i>
            </button>
            <button onclick="exclude(${counter})" class="exclude">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
</div>`

        //coloco dentro da div que é:
        mySlogans.innerHTML += div_slogan;

        //limpar campo dps de escrever:
        slogan_input.value = ''

        //piscar campo:
        slogan_input.focus();
    }
}

//deletar item:
function exclude(id) {
    let slogan = document.getElementById(id);
    slogan.remove();
}

//clicar enter e add:
slogan_input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
})

function fav() {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-solid');
    })
}
