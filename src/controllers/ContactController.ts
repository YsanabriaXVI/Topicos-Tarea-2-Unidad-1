import { ContactView } from "../views/ContactView";
import { ContactList } from "../models/ContactList";

export class ContactController {

    constructor(private model: ContactList, private view: ContactView) {

    }

    //Methods

    add(nombre: string, telefono: string, email: string){
        const contact = this.model.addContact(nombre, email, telefono);
        this.view.displayMessage(`Contacto ${contact.nombre} agregado exitosamente.`);
    }

    remove(id: string): void{
        const success = this.model.deleteContact(id);

        if(success){
          this.view.displayMessage(`Contacto ${id} eliminado exitosamente.`);
        }
          this.view.displayMessage(`Contacto ${id} no encontrado.`);
    }

    showContacts(){
        const contacts = this.model.getContacts();
        this.view.displayContacts(contacts);
    }
}