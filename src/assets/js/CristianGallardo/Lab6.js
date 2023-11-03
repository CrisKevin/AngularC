let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
    ];

    let op;

    while (op !== 5) {
        op = prompt("1. Mostrar contacto en cualquier posicion\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Salir del programa");

        switch (op) {
            case "1":
                console.log("Mostrar contacto:");
                let showContact = prompt("Ingrese la posicion del contacto:");
                let i = parseInt(showContact);
                showContact(contacts, i);
                break;
            case "2":
                console.log("Ultimo contacto:");
                let last = contacts.length - 1;
                console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
                break;
            case "3":
                console.log("Todos los contactos:");
                showAllContacts(contacts);
                break;
            case "4":
                let newName = prompt("Introduzca su Nombre: ");
                let newPhone = prompt("Introduzca su Numero de Telefono: ");
                let newEmail = prompt("Introduzca su Correo Electronico: ");
                addNewContact(contacts, newName, newPhone, newEmail);
                break;
            case "5":
                op=5;
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción inválida");
        }
    }

    function showContact(contacts, i) {
        if (contacts instanceof Array && i >= 0 && i < contacts.length) {
            console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        } else {
            console.log("Error, indice invalido");
        }
    }

    function showAllContacts(contacts) {
        if (contacts instanceof Array) {
            for (let i = 0; i < contacts.length; i++) {
                console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
            }
        } else {
            console.log("Error, lista de contactos invalida");
        }
    }

    function addNewContact(contacts, name, phone, email) {
        if (contacts instanceof Array && name && phone && email) {
            let newContacts = {
                name: name,
                phone: phone,
                email: email
            };
            contacts.push(newContacts);
            console.log("Nuevo contacto agregado");
        } else {
            console.log("Error, debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
        }
    }