/**
     * CTPersonController
     * Main controller class for Person__c object
     * @author Junaid
 */ 
     public with sharing class CTPersonController {
    /**
     * generate unique token using mobile number
     * use MD5 algorithm to generate one-way hash
     * @param mobile
     * @return string token
    */ 
    public static String getToken(String mobileNo){
        Blob value = Blob.valueOf(mobileNo);
        Blob hash = Crypto.generateDigest('MD5', value);
        // get the string value of hash blob and return encoded string
        return EncodingUtil.base64Encode(hash);
    }

    /**
    * get 100 contacts with recenat health status change
    * @return List<Person__c>
    */ 

    public static List<Person__c> getRecentHealthChanges(){
        return [SELECT Id, Health_Status__c, Mobile__c, Status_Update_Date__c, Token__c, Name FROM Person__c ORDER BY Status_Update_Date__c DESC NULLS LAST LIMIT 100];
    }

    /**
    * search a person by id
    * @return Person__c
    */ 
    public static List<Person__c> searchPeople(String searchTerm){
        searchTerm = searchTerm + '%';
       return [SELECT Id, Health_Status__c, Mobile__c, Status_Update_Date__c, Token__c, Name FROM Person__c WHERE NAME LIKE :searchTerm OR Mobile__c LIKE :searchTerm OR Token__c LIKE :searchTerm ORDER BY Status_Update_Date__c DESC NULLS LAST LIMIT 100];
    }

    public static Person__c getPersonById (String personId){
        List<Person__c> people = [SELECT Id, Health_Status__c, Mobile__c, Status_Update_Date__c, Token__c, Name FROM Person__c WHERE ID =:personId];
        if(people != null && people.size() > 0){
        return people[0];
        }
            return null;

    }

     /**
    * Get count of people in each health status
    * @return Map<String, Integer>
    */    
    public static Map<String, Integer> getHealthStatusCount(){
        Map<String, Integer> healthCountMap = new Map<String, Integer>();   
        for(AggregateResult ar : [SELECT Health_Status__c, COUNT(Id) total FROM Person__c GROUP BY Health_Status__c]){
            String healthStatus = String.valueOf(ar.get('Health_Status__c'));
            Integer count = Integer.valueOf(ar.get('total'));
        healthCountMap.put(healthStatus, count);
       }

       return healthCountMap;
    }

}