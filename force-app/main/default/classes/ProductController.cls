public with sharing class ProductController {
    @AuraEnabled(cacheable=true)
    public static List<SalesOrder__c> getSalesOrderList() {
            return [SELECT Product__r.Name, Product__r.Quantity_in_Stock__c,Id,Order_Status__c from SalesOrder__c LIMIT 10];
    }
}