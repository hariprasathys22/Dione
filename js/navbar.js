
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

var toggleMenu = () => {
    var menu = document.querySelector(".toggle");
    var navigation = document.querySelector(".navigation");
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
  };













/* ***************For Content*************** */
