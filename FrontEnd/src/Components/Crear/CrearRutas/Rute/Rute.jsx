// // React
import { useId, useState } from 'react';
// Components
import CustomSelect from '../../../Generals/Inputs/CustomSelect/CustomSelect';
// MUI
// import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
// css
import './Rute.css';

export default function Rute() {
    return (
        <div className='route'>

            <div className='method-route'>
                {/* <select name="selectedFruit" >
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select> */}

                <CustomSelect>
                    <a href="#Autoridades"> Autoridades </a>
                    <a href="#"> Auspicios </a>
                    <a href="#Tematica"> Informacion general </a>
                </CustomSelect>



                <input className="RouteUrl" type="text" name="" id="" placeholder='Url' />
            </div>

        </div>
    );
}
