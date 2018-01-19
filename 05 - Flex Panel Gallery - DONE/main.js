function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if(e.propertyName.includes('flex'))
		this.classList.toggle('open-active');
}

const panels = document.querySelectorAll('.panel');

panels.forEach((item)=> item.addEventListener('click', toggleOpen));
panels.forEach((item)=> item.addEventListener('transitionend', toggleActive));