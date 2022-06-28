import React from 'react'
import {Contact} from '../../models/Contact'
import {ContactComponent} from '../pure/ContactComponent';

function ContactListComponent() {
    
    const defaultContact = new Contact('Hiro', 'Lestrade', 'hles@correo.com', true);
    
    return (
        <div>
            <h1>Contacts:</h1>
            {/*TODO: modificar para renderizar lista.*/}
            <ContactComponent contact={defaultContact}/>
        </div>
    );
}

export {ContactListComponent};


