let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicador = document.querySelector('.indicador')
let dots = indicador.querySelectorAll('ul li')
let list = container.querySelector('list')

let active = 0
let firsPosition = 0
let lastPosition = items.length - 1


nextButton.onclick = () => {
    

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.numero').innerHTML = '0' + (active + 1)
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firsPosition ? 0 : active - 1
    items[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
    indicador.querySelector('.numero').innerHTML = '0' + (active + 1)
}