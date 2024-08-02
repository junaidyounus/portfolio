public class CreateContactBatch implements Database.Batchable<SObject> {

    
    public Database.QueryLocator start(Database.BatchableContext context) {
        return Database.getQueryLocator('SELECT Id, Name FROM Account');
    }
    public void execute(Database.BatchableContext context, List<Account> accounts) {
        
        List<Contact> contactsToInsert = new List<Contact>();
		string emailtoinsert;
        for (Account acc : accounts) {
            emailtoinsert = acc.Name;
            emailtoinsert = emailtoinsert.replaceAll('\\s','');
            Contact newContact = new Contact(
                FirstName = 'Junaid', 
                LastName = 'Younus', 
                Email = 'Junaid'+emailtoinsert+'@some.com', 
                AccountId = acc.Id
            );
            system.debug(newContact);
            contactsToInsert.add(newContact);
            
        }

       
        insert contactsToInsert;
    }

    
    public void finish(Database.BatchableContext context) {
        System.debug('Done');
    }
}