import { LightningElement,api } from 'lwc';

export default class ChildThree extends LightningElement {
    @api childThreeValue
    clickHandler(){
        const myEvent = new CustomEvent('text',{
            detail: 'Hello from Child Three'
        })
        this.dispatchEvent(myEvent)
    }
}