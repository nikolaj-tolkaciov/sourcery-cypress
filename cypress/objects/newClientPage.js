import PageComponents from "./pageComponents";

class NewClientPage extends PageComponents{
    createNewClient(){
        var date = Date.now();
        var organizationName = 'Organization_' + date
        this.getElementById("clientDetailsForm.organization").type(organizationName)
        this.getElementById("clientDetailsForm.contacts_firstName_0").type('FirstName')
        this.getElementById("clientDetailsForm.contacts_lastName_0").type('LastName')
        this.getElementById("clientDetailsForm.contacts_email_0").type('email@email.email')
        this.clickSubmit();
        
        return organizationName;
    }
}

export default NewClientPage