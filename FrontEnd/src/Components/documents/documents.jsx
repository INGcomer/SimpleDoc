// // React
import { useId, useState } from 'react';
// Components
import BaseLayout from '../Generals/Layout/Layout';
// MUI
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
// css
import './documents.css';

export default function Documents() {
    return (
        <BaseLayout>
            <div className='Documents_page'>
                <div className='navigation'>
                    <div className='title_folders'>
                        <h3> Folders </h3>
                        <button className='new_folder'>
                            <CreateNewFolderIcon />
                        </button>
                    </div>

                    <ul className='folders'>
                        <li className='folder'><span> folder 1 </span></li>
                        <li className='folder'><span> folder 2 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                        <li className='folder'><span> folder 3 </span></li>
                    </ul>
                    <div className='newfile'>
                        <button>
                            New File
                        </button>

                        <div className='basic_plan_files_info'>
                            <div className='barra_progreso'>
                                <div className='indicator'>

                                </div>
                            </div>
                            <small>
                                <b>3</b> out of <b>5</b> files used. <br />
                                <a href="">Upgrade</a> your plan for unlimited access.
                            </small>
                        </div>
                    </div>

                </div>
                <div className='documents'>

                </div>
            </div>
        </BaseLayout>

    );
}
