$(function () {
	$('.destinations__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:
			'<button class="slider-btn slider-btn__left"><i class="fas fa-angle-left"></i></button>',
		nextArrow:
			'<button class="slider-btn slider-btn__right"><i class="fas fa-angle-right"></i></button>',
	})
})

const count = document.querySelector('.booking__content-text-2 span')
const likeBtn = document.querySelector('.booking__like-btn')

likeBtn.addEventListener('click', () => {
	let likes = parseInt(count.textContent)
	likes++
	count.textContent = likes
})

window.addEventListener('load', () => {
	const content = document.querySelector('.reviews__content')
	const sliderLength = document.querySelectorAll(
		'.reviews__slider-item'
	).length
})

const dotsContainer = document.querySelector('.reviews__dots-container')
const slides = document.querySelectorAll('.reviews__slider-item')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let dots = document.querySelectorAll('.reviews__dot')

let current = 0
let prev = 0
let next = 1

const getNext = () => {
	if(current === slides.length-1){
		next = 0
	}
	next++
	return next
}

window.addEventListener('DOMContentLoaded', () => {
	prevBtn.classList.add('disabled')
	nextBtn.classList.add('btn--active')

	dotsContainer.innerHTML = displayDots()

	dots = document.querySelectorAll('.reviews__dot')
	dots[current].classList.add('reviews__dot--active')
	slides[current].style.transform = 'translate3d(-48px, -77px, 10px)'

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			current = index
			next = getCurrent()
			console.log(`index`, index);
			carousel()
			prev = current
		})
	})
})

let displayDots = () => {
	let dots = ''
	for (let i = 0; i < slides.length; i++) {
		dots += '<button class="reviews__dot"></button>'
	}
	return dots
}

nextBtn.addEventListener('click', () => {
	current++
	next = getCurrent()
	carousel()
	prev = current
})

prevBtn.addEventListener('click', () => {
	next = current
	current--
	carousel()
	prev = current
})

const carousel = () => {
	if (current === 0) {
		prevBtn.classList.remove('btn--active')
		prevBtn.classList.add('disabled')
		nextBtn.classList.add('btn--active')
		nextBtn.classList.remove('disabled')
	} else if ( current < slides.length - 1) {
		prevBtn.classList.add('btn--active')
		prevBtn.classList.remove('disabled')
		nextBtn.classList.add('btn--active')
		nextBtn.classList.remove('disabled')
	}
	else if(current === slides.length - 1){
		prevBtn.classList.add('btn--active')
		prevBtn.classList.remove('disabled')
		nextBtn.classList.remove('btn--active')
		nextBtn.classList.add('disabled')
	} else {
		nextBtn.classList.add('disabled')
		nextBtn.classList.remove('btn--active')
	}
	console.log(prevBtn.classList);
	console.log(nextBtn.classList);

	dots.forEach((dot) => {
		dot.classList.remove('reviews__dot--active')
	})
	dots[current].classList.add('reviews__dot--active')
	console.log(`prev`, prev)
	console.log(`current`, current)
	slides[prev].style.transform = 'translate3d(0, 0, 0)'
	slides[prev].style.zIndex = `0`
	slides[current].style.transform = 'translate3d(-48px, -77px, 10px)'
	slides[current].style.zIndex = `${slides.length}`
	slides[next].style.zIndex = `${slides.length - 1}`

	console.log(`z`, slides[prev].style.zIndex);
	console.log(`zc`, slides[current].style.zIndex);
}
