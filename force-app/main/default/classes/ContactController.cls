public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRecentContacts() {
        return [SELECT Id, FirstName, LastName, Email,AccountId FROM Contact ORDER BY CreatedDate DESC LIMIT 5];
    }
}