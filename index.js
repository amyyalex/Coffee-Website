window.addEventListener("load", function(){
	/*-------------animation on scroll------*/
	AOS.init();
});




/*-------------menu tabs------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-item")  && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        AOS.init();
    } 
});



/*-------------menu button------*/
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


/*-------------menu pop up------

const home_btn = document.querySelector('.home-btn');
const picContainer = document.querySelector('.pics-container');

const close = document.querySelector('.close');

home_btn.addEventListener('click',()=>{
   picContainer.classList.add('show'); 
});

close.addEventListener('click',()=>{
   picContainer.classList.remove('show'); 
});*/
