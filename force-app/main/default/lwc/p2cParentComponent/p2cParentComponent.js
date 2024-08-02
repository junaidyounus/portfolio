import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card!",
            description : "First card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card!",
            description : "Second card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card!",
            description : "Third card description."
        },

    ]

    percantage=10
    changeHandler(event){
        this.percantage = event.target.value;
    }

    handleClick(){
        // This is the point where will define resetHandler call
        // calling child method in parent JS 
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }

}