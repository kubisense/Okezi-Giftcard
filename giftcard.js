
const accordionTitles = document.querySelectorAll('.DropdownChev');
for (const accordionTitile of accordionTitles) {
    accordionTitile.addEventListener('click', accordion);
}

function accordion() {
    const accordionHeader = this.nextElementSibling.children[0];
    const height = accordionHeader.scrollHeight;
    this.classList.toggle('active-header');
    if(this.classList.contains('active-header')){
        accordionHeader.style.maxHeight = `${height}px`;
        console.log(accordionHeader.innerHTML);
    }
    else{
        accordionHeader.style.maxHeight = '0px';
    }
}
