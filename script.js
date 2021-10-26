const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {

        this.navList.classList.toggle(this.activeClass);
        
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    Init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }   
}

const mobileNavbar = new MobileNavbar(".mobile-menu",".nav__links","nav__links li",);
mobileNavbar.Init();


