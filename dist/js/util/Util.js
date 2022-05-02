class Util {

    constructor() {

        this.buttonMenuMob = document.querySelector('.cnn-header-mob-button button');
        this.menuMob = document.querySelector('.cnn-header-menu-mob');
        this.closeMenuMob = document.querySelector('.cnn-header-menu-mob-close button');
        this.openMenu();
        this.closeMenu();
        
    }

    openMenu(){

        this.buttonMenuMob.addEventListener("click", () =>{

            this.menuMob.classList.add("active");

        });

    }

    closeMenu(){

        this.closeMenuMob.addEventListener("click", () =>{

            this.menuMob.classList.remove("active");

        });

    }

};