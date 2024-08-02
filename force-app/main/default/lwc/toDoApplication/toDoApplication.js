import { LightningElement } from 'lwc';

export default class ToDoApplication extends LightningElement {
taskname = "";
taskdate = null;
incompletetask = [];
completetask = [];
    changeHandler(event){
        let {name, value} = event.target;
        if(name === "taskname"){
            this.taskname = value;
        } else if(name === "taskdate"){
            this.taskdate = value;
        }
    }
    resetHandler(){
        this.taskname = "";
        this.taskdate = null;
    }
    addTaskHandler(){
        // if end date is missing, then populate todays date as end date
       if(!this.taskdate){ this.taskdate = new Date().toISOString().slice(0,10);
    }
}

validateTask(){
    let isValid = true;
    // Condition 1 -- Check if task is Empty
    // Condition 2 -- If task name is not empty then check for the duplicate
}
}