import { ContactList } from "./models/ContactList";
import { ContactView } from "./views/ContactView";
import { ContactController } from "./controllers/ContactController";

//! Instancias de los 3 componentes
const contactList = new ContactList();
const contactView = new ContactView();
const contactController = new ContactController(contactList, contactView);

//* Flujo de la aplicación

//? 1. Mostrar lista vacía
contactController.showContacts();

//? 2. Agregar dos contactos
const contact1 = contactList.addContact("Yehudi Sanabria", "yehudisanabria@gmail.com", "123456789");
const contact2 = contactList.addContact("María López", "marialopez1995@gmail.com", "987654321");

contactView.displayMessage("Se agregaron 2 contactos.");

//? 3. Mostrar lista actualizada
contactController.showContacts();

//? 4. Eliminar un contacto
contactController.remove(contact1.id);

//? 5. Intentar eliminar un contacto inexistente
contactController.remove("8707706b-ft4v-4834-b29i-8da145c459f0");

//? 6. Mostrar lista final
contactController.showContacts();
