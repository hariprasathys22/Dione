
/* ************************Navbar sticky************** */

const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () =>{
    const currentScroll = window.pageYOffset;
    if(currentScroll <= 0){
        body.classList.remove("scroll-up")
    }


    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
        
    }

    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
        
        
    }

    lastScroll = currentScroll;
})











/************************Navbar Hover*************************** */
const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item => {
    // console.log(item)
    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = "";
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.bottom = '0';
    cloneDiv.style.top = '0';
    item.appendChild(cloneDiv);
})

/* ***************For Content*************** */
const content = [...document.querySelectorAll('.content-1')];

content.forEach(item => {
    // console.log(item)
    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = "";
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.left = '0';
    cloneDiv.style.top = '0';
   
    item.appendChild(cloneDiv);
})