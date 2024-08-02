import { LightningElement, api } from 'lwc';

export default class ChildOne extends LightningElement {
    @api childOneValue;

    clickHandler(){
        const myEvent = new CustomEvent('text',{
            detail: 'Hello from Child One'
        })
        this.dispatchEvent(myEvent)
    }

}