const { log } = require("console");
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json");
console.log(contactsPath);

async function listContacts() {
	const contactsData = await fs.readFile(contactsPath);
	return JSON.parse(contactsData);
}

async function getContactById(contactId) {
	const contacts = await listContacts();
	const contact = contacts.find((item) => item.id === contactId);
	return contact || null;
}

async function addContact({ name, email, phone }) {
	const contacts = await listContacts();
	const newContact = {
		id: nanoid(),
		name,
		email,
		phone,
	};
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return newContact;
}

async function updateContact(id, { name, email, phone }) {
	const contacts = await listContacts();
	const index = contacts.findIndex((item) => item.id === id);
	if (index === -1) {
		return null;
	}
	contacts[index] = { id, name, email, phone };
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return contacts[index];
}

async function removeContact(contactId) {
	const contacts = await listContacts();
	const index = contacts.findIndex((item) => item.id === contactId);
	if (index === -1) {
		return null;
	}
	const [result] = contacts.splice(index, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return result;
}

module.exports = {
	listContacts,
	getContactById,
	addContact,
	updateContact,
	removeContact,
};
