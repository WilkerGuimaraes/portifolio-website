/*menu-mobile - INÍCIO*/

class MobileNavBar {
    constructor(mobileMenu, navList) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar('.mobile-menu', '.nav-list');

mobileNavBar.init();

/*menu-mobile - FIM*/

/*----------------------------------------------------------------------------*/

/*Inverter a imagem - INÍCIO*/

const rotateImage = document.querySelector('.virar');

rotateImage.addEventListener('click', () => {
    if (rotateImage.classList.contains('active')) {
        rotateImage.classList.remove('active');
    } else {
        rotateImage.classList.add('active');
    }
});

/*Inverter a imagem - FIM*/