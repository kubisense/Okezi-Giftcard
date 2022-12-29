/* const accordionTitles = document.querySelectorAll('.accordion-title');
for (const accordionTitle of accordionTitles) {
   
    accordionTitle.addEventListener('click', () => {
        accordionTitle.classList.toggle('active-header');
        if(accordionTitle.classList.contains('active-header')){
            const html = document.getElementsByClassName('accordion-answer')[accordionTitle];
            const height = html.scrollHeight;
            console.log(height);
            html.style.maxHeight = `${height}px`;
        }
        else{
            html.style.maxHeight = '0px';
        }    
})
} */

/* const accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        accordionTitle.classList.toggle('active-header');
       
        const height = accordionTitle.nextElementSibling.scrollHeight;
        if(accordionTitle.classList.contains('active-header')){
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        }
        else{
            accordionTitle.nextElementSibling.style.maxHeight = '0px';
        }
        
    });
}); */

const accordionTitles = document.querySelectorAll('.DropdownChev');
for (const accordionTitile of accordionTitles) {
    accordionTitile.addEventListener('click', accordion);
}
/* 
function accordion() {
    const accordionHeader = this.parentNode.parentNode.nextElementSibling;
    //console.log(accordionHeader.children[0].children[0].innerHTML);
    console.log(accordionHeader.children[0].children[0].scrollHeight);
    const height = accordionHeader.children[0].children[0].scrollHeight;
    this.classList.toggle('active-header');
    if(this.classList.contains('active-header')){
        accordionHeader.children[0].children[0].style.maxHeight = `${height}px`;
    }
    else{
        accordionHeader.children[0].children[0].style.maxHeight = '0px';
    }
} */

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
