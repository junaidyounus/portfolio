import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: '0035j00001KJZwHAAX',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }


    navigateToEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: '0035j00001KJZwHAAX',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}