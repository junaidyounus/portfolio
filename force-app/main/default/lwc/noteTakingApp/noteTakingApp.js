import { LightningElement, wire} from 'lwc';
import createNoteRecord from '@salesforce/apex/NoteTakingController.createNoteRecord';
import getNotes from '@salesforce/apex/NoteTakingController.getNotes';

const DEFAULT_NOTE_FORM = {
    Name:"",
    Note_Description__c:""
}
export default class NoteTakingApp extends LightningElement {
    showModal = false
    noteRecord = DEFAULT_NOTE_FORM
    noteList = []
    selectedRecordId
    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'clean',
        'table',
        'header',
        'color',
    ];

    get isFormInvalid(){
        return !(this.noteRecord && this.noteRecord.Name && this.noteRecord.Note_Description__c)
    }

    get ModalName(){
        return this.selectedRecordId ? 'Update Note' : 'Save Note'
    }

    @wire(getNotes)
    noteListInfo({data, error}){
        if(data){
            console.log("Data of Notes", JSON.stringify(data));
            this.noteList = data.map(item=>{
                let formatedDate = new Date(item.LastModifiedDate).toDateString();
                return {...item, formatedDate}
            })
        }
        if(error){
            console.error("error in fetching", error);
            this.showToastMsg(error.message.body, "error")
        }

    }

    createNoteHandler(){
        this.showModal = true
    }
    closeModalHandler(){
        this.showModal = false
        this.noteRecord = DEFAULT_NOTE_FORM  // it will remove all text from modal, we are reassigning empty value again as it was empty at the time of creation please see line number 3-6
        this.selectedRecordId = null
    }
    changeHandler(event){
        const {name, value} = event.target;
        this.noteRecord={...this.noteRecord, [name]:value}
    }

    formSubmitHandler(event){
        event.preventDefault(); // Form will refresh automatically
       // console.log("this.noteRecord", JSON.stringify(this.noteRecord));
       this.createNote()
    }

    createNote(){
        createNoteRecord({title:this.noteRecord.Name, description:this.noteRecord.Note_Description__c}).then(()=>{
            this.showModal = false
            this.showToastMsg("Note Created Successfully!!", "success")
        }).catch(error=>{
            console.error("error", error.message.body);
            this.showToastMsg(error.message.body, "error")
        })
    }

    showToastMsg(message, variant){
        const elem = this.template.querySelector('c-notification')
        if(elem){
         elem.showToast(message, variant)  // showToast coming from notification component through @api
        }
    }

    editNoteHandler(event){
        const {recordid} = event.target.dataset
        const noteRecord = this.noteList.find(item=>item.Id === recordid)
        this.noteRecord = {
            Name:noteRecord.Name,
            Note_Description__c:noteRecord.Note_Description__c
        }
            this.selectedRecordId = recordid
            this.showModal = true
    }
}