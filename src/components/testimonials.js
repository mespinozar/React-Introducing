import React from 'react';
import '../stylesheet/testimonials.css'

function Testimonio(props) {
    return (
        <div className='container-testimonial'>
            <img className='imagen-testimonial' src={require (`../imagenes/testimonio-${props.imagen}.png`)} alt='Foto de Ema'/>
            <div className='container-text-testimonial'>
                <p className='name-testimonial'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonial'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='text-testimonial'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;