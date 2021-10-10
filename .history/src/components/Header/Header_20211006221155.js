import { TextField } from '@material-ui/core'
import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <span className="title">Word Hunt</span>
            <div className="inputs">
                <TextField  />
            </div>
        </div>
    )
}
