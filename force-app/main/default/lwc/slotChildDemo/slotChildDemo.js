import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleFooterChange(){
        const footerElem = this.querySelector('.slds-card__footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
     }
}