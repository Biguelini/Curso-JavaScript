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
import Multi from './components/Multiplos'
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="João" />
        <Multi.BoaNoite nome="Ana" />
    </div>,
    document.getElementById('root')
)
 