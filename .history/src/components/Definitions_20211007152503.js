import React from 'react'
import './Definitions.css'

export const Definitions = ({word, category, meanings}) => {
    return (
        <div c>
           { word===''? <span className='subtitle'>Start by typing a word in Search</span> : (
               <p></p>
           ) }
        </div>
    )
}
