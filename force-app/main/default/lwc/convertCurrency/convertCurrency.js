import { LightningElement } from 'lwc';

export default class ConvertCurrency extends LightningElement {
    
    showOutput = false;
    toCurrency = "";
    fromCurrency="";
    enteredAmount = "";
    convertedValue = "";
    // Add currency formats in this array from API call 
    currencyOptions = [];


    changeHandler(event){
        // Get input from fields/comboboxes
        let  value = event.target.value;
        let  name = event.target.name;

        if(name === 'amount') this.enteredAmount = value;
        if(name === 'fromcurr') this.fromCurrency = value;
        if(name === 'tocurr') this.toCurrency = value;
       
    }
    clickHandler(event){
            this.conversion();
            
           
    }

    connectedCallback(){
        this.fetchSymbols();
        
    }
    
    // this symbol fetch is using here which has define in connectedCallback method.
    async fetchSymbols(){
        let endpoint = 'https://api.frankfurter.app/currencies';
        try{
            let response = await fetch(endpoint);
            if(!response.ok){
                throw new Error('Network response was not ok!');
            }
            const data = await response.json();
            // process the json response and store into currencyOptions array
            let options = [];
            for(let symbol in data){
                options = [...options,{label:symbol, value:symbol}];
            }
            this.currencyOptions = [...options];
            
        }catch(error){
            console.log(error);
        }
    }

    async conversion(){
        let endpoint = `https://api.frankfurter.app/latest?amount=${this.enteredAmount}&from=${this.fromCurrency}&to=${this.toCurrency}`;
        try{
            let response = await fetch(endpoint);
            if(!response.ok){
                throw new error('Network response was not ok!');
            }
            const data = await response.json();
            // process the json response and store into currencyOptions array
            this.convertedValue = data.rates[this.toCurrency];
            this.showOutput = true;

        }catch(error){
            console.log(error);
        }  
    }

}