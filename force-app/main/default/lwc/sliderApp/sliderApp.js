import { LightningElement } from 'lwc';
import sliderApp from '@salesforce/resourceUrl/sliderApp'

export default class SliderApp extends LightningElement {
    firstImage = `${sliderApp}/sliderApp/firstImage.jpg`
    secondImage = `${sliderApp}/sliderApp/secondImage.jpg`
    thirdImage = `${sliderApp}/sliderApp/thirdImage.jpg`
    fourthImgae = `${sliderApp}/sliderApp/forthImage.jpg`
    arrowImage = `${sliderApp}/sliderApp/arrow.png`
}