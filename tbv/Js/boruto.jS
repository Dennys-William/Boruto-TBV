let bot = document.querySelector('.botao1')
bot.addEventListener('click', aperte)

let botao1 = document.querySelector('.botao1')
let imagem = document.querySelector('.imagem')
let imagem1 = document.querySelector('.imagem1')
let video = document.querySelector('.video')
let foto = document.querySelector('.foto')
let foto1 = document.querySelector('.foto1')


setTimeout(function() {
    foto.style.opacity = '1'
    foto1.style.opacity = '1'
}, 500)


function aperte() {
    imagem.style.display = 'none'
    imagem.style.position = 'absolute'
    botao1.style.width = '0%'
    imagem1.style.width = '0%'
    video.style.width = '100%'
    
    setTimeout(function() {
    video.innerHTML = '<iframe  class="video"  src="https://www.youtube.com/embed/3RPTG9NSwLg?si=zbza5u2GxLgVfIYT?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    video.style.textAlign = 'left'

    },800)
  




}



