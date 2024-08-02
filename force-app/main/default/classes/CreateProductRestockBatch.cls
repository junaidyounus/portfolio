public class CreateProductRestockBatch implements Database.Batchable<SObject> {

    
    public Database.QueryLocator start(Database.BatchableContext context) {
        return Database.getQueryLocator('SELECT Id, Name, Quantity_in_Stock__c FROM Product__c WHERE Quantity_in_Stock__c < 50');
    }
    public void execute(Database.BatchableContext context, List<Product__c> products) {
        
        List<RestockProduct__c> restockToInsert = new List<RestockProduct__c>();
        for (Product__c pro : products) {
            RestockProduct__c newRestock = new RestockProduct__c(
                Quantity_Restocked__c = 200,
                Product__c = pro.Id,
                Name = pro.Name
                
            );
            restockToInsert.add(newRestock);
        }
        if(restockToInsert.size() < 0){
        insert restockToInsert;
        }
    }

    
    public void finish(Database.BatchableContext context) {
        System.debug('Done');
    }
}