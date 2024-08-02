public with sharing class DoctorController {
    @AuraEnabled(cacheable=true)
    public static Integer getDoctorsCount() {
        return [SELECT COUNT() from Doctor__c];
    }

    
}