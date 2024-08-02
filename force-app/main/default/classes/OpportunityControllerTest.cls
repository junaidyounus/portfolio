@isTest
public class OpportunityControllerTest {

    @isTest
    static void testUpdateOpportunity() {
        // Create a test Opportunity with an Amount of 10000
        Opportunity testOpp = new Opportunity(
            Name = 'Test Opportunity',
            Amount = 10000,
            StageName = 'Closed Won',
            CloseDate= Date.today()
        );
        insert testOpp;

        // Call the method being tested
        List<Id> oppIds = new List<Id>{testOpp.Id};
        OpportunityController.updateOpportunity(oppIds);

        // Retrieve the updated Opportunity
        Opportunity updatedOpp = [SELECT StageName,CloseDate,Profile__c FROM Opportunity WHERE Id = :testOpp.Id];

        // Assert that the Profile__c field is set to 'Low'
        assert.areEqual('Low', updatedOpp.Profile__c);
    }
    
     @isTest
    static void testUpdateOpportunity1() {
        // Create a test Opportunity with an Amount of 10000
        Opportunity testOpp = new Opportunity(
            Name = 'Test Opportunity',
            Amount = 50000,
            StageName = 'Closed Won',
            CloseDate= Date.today()
        );
        insert testOpp;

        // Call the method being tested
        List<Id> oppIds = new List<Id>{testOpp.Id};
        OpportunityController.updateOpportunity(oppIds);

        // Retrieve the updated Opportunity
        Opportunity updatedOpp = [SELECT StageName,CloseDate,Profile__c FROM Opportunity WHERE Id = :testOpp.Id];

        // Assert that the Profile__c field is set to 'High'
        assert.areEqual('High', updatedOpp.Profile__c);
    }
    
     @isTest
    static void testUpdateOpportunity2() {
        // Create a test Opportunity with an Amount of 15000
        Opportunity testOpp = new Opportunity(
            Name = 'Test Opportunity',
            Amount = 15000,
            StageName = 'Closed Won',
            CloseDate= Date.today()
        );
        insert testOpp;

        // Call the method being tested
        List<Id> oppIds = new List<Id>{testOpp.Id};
        OpportunityController.updateOpportunity(oppIds);

        // Retrieve the updated Opportunity
        Opportunity updatedOpp = [SELECT StageName,CloseDate,Profile__c FROM Opportunity WHERE Id = :testOpp.Id];

        // Assert that the Profile__c field is set to 'Medium'
        assert.areEqual('Medium', updatedOpp.Profile__c);
    }
}