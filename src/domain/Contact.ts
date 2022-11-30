import { User } from "../contexts/UserContext";
export interface IContact {
  id: string;
  isGroup?: boolean;
  groupName?: string;
  groupImage?: string;
  createdAt: string;
  users: User[];
}
export interface ContactFormated {
  id: string;
  isGroup?: boolean;
  groupName?: string;
  groupImage?: string;
  createdAt: string;
  userContact: User | undefined;
  users?: User[];
}

class Contact {
  constructor() {}

  mapFormatContact = (contact: IContact) => {
    if (contact.isGroup) {
      const contactGroup = this.mapFormatContactGroup(contact);
      return contactGroup
    }

    let userContact;

    contact.users.some((user) => {
      if (user.name) {
        userContact = user;
      }
    });
  
    return {
      id: contact.id,
      createdAt: contact.createdAt,
      isGroup: false,
      userContact: userContact,
    };
  };

  mapFormatContactGroup = (contact: IContact) => {
    const usersContacts = contact.users.filter((user) => user.name)

    return {
      id: contact.id,
      createdAt: contact.createdAt,
      isGroup: true,
      groupName: contact.groupName,
      groupImage: contact.groupImage,
      users: usersContacts
    }
  }

  mapFormatContactArray = (listContacts: IContact[]) => {
    const listContactsFormated = listContacts.map((contact) =>
      this.mapFormatContact(contact)
    );

    return listContactsFormated;
  };
}

export default new Contact();