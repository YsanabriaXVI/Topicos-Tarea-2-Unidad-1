import { Contact } from "./Contact";
import {randomUUID} from 'crypto';


export class ContactList {

    private contacts: Contact[] = [];

    //Methods 

    getContacts(): Contact[]{
        return this.contacts;
    }

    addContact(nombre: string, email:string, telefono:string): Contact{
       
        const newContact: Contact = {
            id: randomUUID(),
            nombre,
            email,
            telefono
        }

        this.contacts.push(newContact);
        return newContact;
    }

    deleteContact(id: string): boolean{
        const index = this.contacts.findIndex(contact => contact.id === id);

        if(index === -1){
            return false;
        }
        this.contacts.splice(index, 1);
        return true;

    }


}