
let images_slide = document.querySelectorAll('.images_slide');
let prev = document.querySelectorAll('.left');
let next = document.querySelectorAll('.right'); 

let i = 0;

for (let i = 0; i < images_slide.length; i++) {
    images_slide[i].style.display = 'none';
}

images_slide[0].style.display = 'block';

for (let j = 0; j < next.length; j++) {
    next[j].addEventListener('click', () => {
        if (i < images_slide.length - 1) {
            images_slide[i].style.display = 'none';
            i++;
            images_slide[i].style.display = 'block'; 
        } else {
            images_slide[i].style.display = 'none'; 
            i = 0;
            images_slide[i].style.display = 'block'; 
        }
    });
}


for (let j = 0; j < prev.length; j++) {
    prev[j].addEventListener('click', () => {
        if (i > 0) {
            images_slide[i].style.display = 'none'; 
            i--;
            images_slide[i].style.display = 'block';
        } else {
            images_slide[i].style.display = 'none'; 
            i = 2; 
            images_slide[i].style.display = 'block';
        }
    });
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let images_slide1 = document.querySelectorAll('.images_slide1');
let prev1 = document.querySelectorAll('.left1'); 
let next1 = document.querySelectorAll('.right1');  

let x = 0;

for (let i = 0; i < images_slide1.length; i++) {
    images_slide1[i].style.display = 'none';
}

images_slide1[0].style.display = 'block';


for (let j = 0; j < next1.length; j++) {
    next1[j].addEventListener('click', () => {
        if (x < 2) {
            images_slide1[x].style.display = 'none'; 
            x++;
            images_slide1[x].style.display = 'block'; 
        } else {
            images_slide1[x].style.display = 'none'; 
            x = 0; 
            images_slide1[x].style.display = 'block';
        }
    });
}

for (let j = 0; j < prev1.length; j++) {
    prev1[j].addEventListener('click', () => {
        if (x > 0) {
            images_slide1[x].style.display = 'none'; 
            x--;
            images_slide1[x].style.display = 'block'; 
        } else {
            images_slide1[x].style.display = 'none'; 
            x = 2
            images_slide1[x].style.display = 'block';
        }
    });
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>

let modal = document.querySelector('.modal')
let txt_us = document.querySelector('.send')
let xxx = document.querySelector('.modal__close')

modal.style.display = 'none'

txt_us.addEventListener('click' , () => {
    modal.style.display = 'block'
})

xxx.addEventListener('click' , () => {
    modal.style.display = 'none'
})

// >>>>>>>>>>>>>>>>>>>>>>>>>

let token = '7640925241:AAFhWNNNoW_ycT3O2UZQNgX9FA-GbOmUWrI';
let botName = '@Nurcame_bot';
let url_api = `https://api.telegram.org/bot${token}/sendMessage`;
let chat_id = '5274184076';

let tg = document.querySelector('#tg');

tg.addEventListener('submit', function(e){
    e.preventDefault();
    let message = `<b>Заявка сайта</b>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Номер: </b> ${this.number.value}\n`;

    axios.post(url_api, {
        chat_id: chat_id,
        parse_mode: "html",
        text: message
    }).then((res) => {
        this.name.value = '';
        this.number.value = '';
    }).catch((err) => {
        console.error('Ошибка при отправке сообщения:', err);
    }).finally(() => {
        console.log('Запрос завершен');
    });
});


// >>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const section = document.querySelector('section');
    
    if (window.scrollY >= section.offsetTop) {
      nav.style.backgroundColor = '#ffd000a4'
    } else {
      nav.style.backgroundColor = '#ffa60000'
    }
  });
