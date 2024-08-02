import { LightningElement,api } from 'lwc';

export default class ChildTwo extends LightningElement {
    @api childTwoValue
    clickHandler(){
        const myEvent = new CustomEvent('text',{
            detail: 'Hello from Child Two'
        })
        this.dispatchEvent(myEvent)
    }
    
}