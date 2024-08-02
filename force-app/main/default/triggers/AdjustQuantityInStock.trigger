trigger AdjustQuantityInStock on SalesOrder__c (after insert, after update) {
    // Collect product IDs and corresponding quantities sold
    Set<Id> productIds = new Set<Id>();
    Map<Id, Decimal> quantitySoldMap = new Map<Id, Decimal>();

    for (SalesOrder__c so : Trigger.new) {
        productIds.add(so.Product__c);
        quantitySoldMap.put(so.Product__c, so.Quantity_Sold__c);
    }

    // Query products to be updated
    List<Product__c> productsToUpdate = [SELECT Id, Quantity_in_Stock__c FROM Product__c WHERE Id IN :productIds];

    // Update Quantity in Stock based on Quantity Sold
    for (Product__c product : productsToUpdate) {
        Decimal quantitySold = quantitySoldMap.get(product.Id);
        if (quantitySold != null) {
            product.Quantity_in_Stock__c = product.Quantity_in_Stock__c - quantitySold;
        }
    }

    // Update products
    update productsToUpdate;
}