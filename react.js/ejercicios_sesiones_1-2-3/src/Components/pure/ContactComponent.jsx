import React, {useState,} from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../../models/Contact'

function ContactComponent({contact}) {

  const [status, setStatus] = useState(contact.status);

  const changeStatus = () => {
    contact.status = !contact.status;
    setStatus(!status)
  };

  return (
    <div>
      <h2>
        Nombre: {contact.name}
      </h2>
      <h3>
        Apellido: {contact.lastName}
      </h3>
      <h4>
        Email: {contact.email}
      </h4>
      <h5>
        Estado: {status ? 'Contacto en Línea':'Contacto no Disponible'}
      </h5>

      <button onClick={changeStatus}>
        {status ? 'Desconectarse':'Conectarse'}
      </button>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};

export {ContactComponent};



