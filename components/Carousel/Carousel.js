class Carousel {
    constructor(carousel) {
        console.log(carousel);

        this.leftButton = carousel.querySelector(".left-button");
        this.rightButton = carousel.querySelector(".right-button");
        this.images = carousel.querySelectorAll("img");
        this.currentIndex = 0; 
    
        this.leftButton.addEventListener("click", () => this.moveLeft());
        this.rightButton.addEventListener("click", () => this.moveRight());
    
        this.images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block"; 
    
    }

    moveLeft(){
        
        this.currentIndex -= 1;
        
        if (this.currentIndex < 0){
            this.currentIndex = this.images.length-1;

            this.images.forEach(image => image.style.display = "none");
            this.images[this.currentIndex].style.display = "block"; 
            
        }
        
        this.animate();
    }

    moveRight(){
        
        this.currentIndex += 1;
        
        if (this.currentIndex >= this.images.length){
            this.currentIndex = 0;
        }

        this.images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        this.animate();
    }

    animate() {
        // question: how to set up time for keyframes, since each browser
        // is running in runtime. 

        // do you set up a timer, with a counter? 
        this.images[this.currentIndex].style.animationPlayState = "running";

        // https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
    }

}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/