import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'

export default class ParentDemo extends LightningElement {
    childOne = ""
    childTwo = ""
    childThree = ""
    message
    msg


    showHandler(event){
    this.msg = event.detail
    }
    childOneClicked(){
        this.childOne = "Child One Clicked";
    }


    childTwoClicked(){
        this.childTwo = "Child Two Clicked";
    }

    childThreeClicked(){
        this.childThree = "Child Three Clicked";
    }


    resetHandler(){
        this.childOne = "";
        this.childTwo = "";
        this.childThree = "";
    }

    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.message = message
        })
    }

    
}