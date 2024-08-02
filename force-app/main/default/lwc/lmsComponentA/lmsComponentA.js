import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/sampleMessageChannel__c"
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue
    @wire(MessageContext)
    context

    inputHandler(event){
        this.inputValue = event.target.value
    }
    
    message(){}

    messagePublish(){
       const message={
        recordId:{
            value:this.inputValue
        }
    }
    publish(this.context, SAMPLEMC, message)
    }

   
}