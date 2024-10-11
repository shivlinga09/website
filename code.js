    
 let navbar = document.querySelector('.navbar');
let menuIcon= document.querySelector('#menu-icon');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}        


//   scroll sections 
    let sections = document.querySelectorAll("section");
    let navlinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
    
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset=sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id=sec.getAttribute("id");
            

        if(top>= offset && top< offset + height )
        {
            // active navbar links 
            navlinks.forEach(links => {
            links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
            // active sections for animation on scroll 
            sec.classList.add('show-animate');

        }
        else{
            sec.classList.remove('show-animate');

        }

    });
    
    
    
    // sticky header on scroll 
    let header1 = document.querySelector("header");
    header1.classList.toggle("sticky",window.scrollY > 100);

    // Remove toggle    Icon and navbar when clivked on single navbar link 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}
