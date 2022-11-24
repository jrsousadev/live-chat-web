import { User } from "../contexts/UserContext";

export interface Contact {
  id: string;
  createdAt: string;
  users: User[];
}

export interface ContactFormated {
  id: string;
  createdAt: string;
  userContact: User | undefined;
}

export const mapFormatContact = (contact: Contact) => {
  let userContact;

  contact.users.some((user) => {
    if (user.name) {
      userContact = user;
    }
  });

  return {
    id: contact.id,
    createdAt: contact.createdAt,
    userContact: userContact,
  };
};

export const mapFormatContactArray = (listContacts: Contact[]) => {
  const listContactsFormated = listContacts.map((contact) =>
    mapFormatContact(contact)
  );

  return listContactsFormated;
};
