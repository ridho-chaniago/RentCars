import React from 'react'
import { BtnBack, BtnBackHome } from '../molecules/BtnIcon'

function BtnHeader() {
    return (
        <div className=' flex justify-between'>
            <BtnBack />
            <BtnBackHome />

        </div>
    )
}

export default BtnHeader