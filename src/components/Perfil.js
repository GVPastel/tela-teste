import React, { useState } from "react";
import Menu from './Menu'
import Calendar from 'react-calendar';

const Perfil = () => {
    const [data, clique] = useState(new Date());
    return(
        <div>
            <h2>Perfil</h2>
            <div>
                <Calendar onChange={clique} value={data} />
            </div>
            <Menu />
        </div>
    )

}

export default Perfil