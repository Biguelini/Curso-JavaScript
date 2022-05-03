import React from 'react'
import ReactDOM from 'react-dom'
// import { BoaTarde, BoaNoite } from './components/Multiplos'
// ReactDOM.render(
    //     <div>
    //         <BoaTarde nome="João" />
    //         <BoaNoite nome="Ana" />
    //     </div>,
    //     document.getElementById('root')
    // )
import Saudacao from './components/Saudacao'
ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>,
    document.getElementById('root')
)
 