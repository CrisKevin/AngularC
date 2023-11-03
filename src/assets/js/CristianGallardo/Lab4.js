let contacts = [{
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
    }];
let op = prompt("1. Mostrar el primer contacto\n2. Mostrar el último contacto\n3. Agregar un nuevo contacto");

if (op === "1") {
    console.log("Primer contacto:");
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
} else if (op === "2") {
    console.log("Último contacto:");
    let last = contacts.length - 1;
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
} else if (op === "3") {
    let newName = prompt("Introduzca el nombre:");
    let newPhone = prompt("Introduzca el numero de telefono:");
    let newEmail = prompt("Ingrese el correo electrónico:");

    if (newName && newPhone && newEmail) {
        let nuevoContacto = {
            name: newName,
            phone: newPhone,
            email: newEmail
        };

        contacts.push(newContacts);
        console.log("Contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
} else {
    console.log("Opción inválida. Por favor, elige una opción válida.");
}