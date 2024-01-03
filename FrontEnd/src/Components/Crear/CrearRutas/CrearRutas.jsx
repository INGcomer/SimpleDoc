// // React
import { useId, useState } from 'react';
// Components
import BaseLayout from '../../Generals/Layout/Layout';
import Rute from './Rute/Rute';
// MUI
// import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
// css
import './CrearRutas.css';

export default function CrearRutas() {
    return (
        <BaseLayout>
            <div className='CrearRutas'>
                <form action="">
                    <input type="text" name="Title" id="" placeholder='Title' />

                    <textarea name="Description" id="" placeholder='Description' cols="30" rows="3">

                    </textarea>


                    <Rute/>



                </form>
            </div>
        </BaseLayout>
    );
}
