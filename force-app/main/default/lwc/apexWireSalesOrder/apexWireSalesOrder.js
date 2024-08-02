import { LightningElement , wire} from 'lwc';
import getSalesOrderList from '@salesforce/apex/ProductController.getSalesOrderList';
export default class ApexWireSalesOrder extends LightningElement {
    columns = [
       { label: 'Product Name', fieldName: 'productName' },
        { label: 'Quantity in Stock', fieldName: 'stock' },
        { label: 'Order Status', fieldName: 'Order_Status__c' },
       

       
        
    ];
    
    displaytable;
    @wire(getSalesOrderList)
    reatedData({data,error}){
        console.log('data',data);
        if(data){
            this.displaytable = data.map(row=>{
                return{...row, productName: row.Product__r.Name,stock :row.Product__r.Quantity_in_Stock__c}
            })
            //this.displaytable=data;
        }
        else if(error){
            console.log('Found error!');
        }
    }
    
}