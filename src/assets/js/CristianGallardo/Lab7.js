let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }
];

let op;
do {
    op = window.prompt("1. Mostar el primer contacto \n2. Mostar el ultimo contacto \n3. Mostrar todos los contactos  \n4. Agragar un nuevo contacto \n5. Clasificacion \n6. Salir del programa","elija una opcion:");
    switch(op){
        case "1":
            showContact(contacts,0);
        break;
        case "2":
            showContact(contacts,(contacts.length)-1);
        break;
        case "3":
            showAllContacts(contacts);
        break;
        case "4":
            let nam = window.prompt("Introduzca su nombre: ");
            let phone = window.prompt("Introduzca su numero de telefono: ");
            let email = window.prompt("Introduzca su correo electronico: ");
            addNewContacts(contacts,nam, phone,email);
        break;
        case "5":
            let orde = window.prompt("Introduzca el orden: \n1. Nombre \n2. Telefono \n3. Correo Electronico ");
            sortContacts(contacts,orde);
        break;
        case "6":
            alert("Saliendo...");
        break;
        default:
            alert("Opcion invalida")
    }
} while(op != 6);

function showContact(lisCont, numInd) {
    if (lisCont instanceof Array && lisCont[numInd]) {
        console.log(`${lisCont[numInd].name} / ${lisCont[numInd].phone} / ${lisCont[numInd].email}`);
    }
}

function showAllContacts(lisCont) {
    if (lisCont instanceof Array) {
        for (let i = 0; i < lisCont.length; i++) {
            console.log(`${lisCont[i].name} / ${lisCont[i].phone} / ${lisCont[i].email}`);        
        }
    }
}

function addNewContacts(lisCont, nom, cell, corrElec ) {
    if (contacts instanceof Array && nom && cell && corrElec) {
        lisCont.push({
            name: nom,
            phone: cell,
            email: corrElec
        });
        alert("Se añadio con exito");
    }
}

function sortContacts(contacts, orde) {
    if (contacts instanceof Array) {
        switch (orde) {
            case "1":
                contacts.sort((a, b) => a.name.localeCompare(b.name));
            break;
            case "2":
                contacts.sort((a, b) => a.phone.localeCompare(b.phone));
            break;
            case "3":
                contacts.sort((a, b) => a.email.localeCompare(b.email));
            break;
            default:
                console.log("Opción invalida");
            return;
        }
        console.log("Lista ordenada:");
        for (const contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}