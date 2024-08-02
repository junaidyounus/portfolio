import { LightningElement , track } from 'lwc';

export default class HelloWorld extends LightningElement {
  // one way binding is Controller(JS) to template(HTML). 
    fullname="Zero to Hero";
    title = "LWC";

  changeHandler(event){
    this.title = event.target.value;
  }

   @track address={
    city:"Melbourne",
    postcode:2000,
    street:"Mildwile"
   }



   trackHandler(event){
  //  this.address= {...this.address, "city": event.target.value};
      this.address.city = event.target.value;
    }

    users = ["John","Smith"]
    num1 = 10
    num2 = 20
    get firstUser(){
        return this.users[0];
    }

    get Multiply(){
        return this.num1*this.num2;
    }
}