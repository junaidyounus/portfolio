import { LightningElement , wire} from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/sampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    subscription
    recievedMessage
    @wire(MessageContext)
    context
    
    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
    this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)},{scope: APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.recievedMessage = message.recordId.value ? message.recordId.value : "NO MESSAGE Published"
    }

    unsubscribeMessage(){
            unsubscribe(this.subscription)
            this.subscription = null
    }
}