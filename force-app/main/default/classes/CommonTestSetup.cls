@isTest

public class CommonTestSetup {
    @testSetup
    static void setup(){
        // Create common test accounts
        List<Account> testAccts = new List<Account>(); 
        for(Integer i=0; i<200; i++){
        testAccts.add(new Account(Name = 'TestAcct'+i, Industry = 'Education', Rating = 'Hot', Phone = '999-111-'+i));
            }
        insert testAccts;
    }
    
    @isTest
    static void testMethod1(){
        Account acct = [SELECT Id FROM Account WHERE Name='TestAcct0' LIMIT 1];
        acct.Phone = '555-1212';
        update acct;
        
        Account acct2 = [SELECT Id FROM Account WHERE Name='TestAcct1' LIMIT 1];
        delete acct2;
    }
    @isTest
    static void testMethod2(){
        Account acct = [SELECT Id,Phone FROM Account WHERE Name='TestAcct0' LIMIT 1];
        Assert.areEqual('999-111-0', acct.Phone);
        
        Account acct2 = [SELECT Id FROM Account WHERE Name='TestAcct1' LIMIT 1];
        Assert.areNotEqual(null, acct2);
        
    }

}