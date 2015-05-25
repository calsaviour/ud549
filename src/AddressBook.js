function AddressBook(){
	this.contacts = [];
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
	var self = this;
}

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){
	return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index){
	return this.contacts.pop();
}