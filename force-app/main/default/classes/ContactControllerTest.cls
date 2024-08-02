@isTest
private class ContactControllerTest {
    @isTest
    static void testGetRecentContacts() {
        List<Contact> testContacts = new List<Contact>();
        for(Integer i=0; i<5; i++) {
            Contact c = new Contact(
                FirstName = 'TestFirstName' + i,
                LastName = 'TestLastName' + i,
                Email = 'test' + i + '@example.com'
            );
            testContacts.add(c);
        }
        insert testContacts;

        List<Contact> recentContacts = ContactController.getRecentContacts();
        System.assertEquals(5, recentContacts.size(), 'Expected to get 5 recent contacts');
    }
}