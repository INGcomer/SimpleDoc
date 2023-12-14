// React
import { useForm } from "react-hook-form";
import { useState } from 'react';
// MUI
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// axios
import axios from "axios";
// CSS
import './Index.css';
// Components
import BaseLayout from '../Generals/Layout/Layout';
// IMGs
import visualization from './img/Paguina de visualizacion.svg'
import creacion from './img/Paguina de Creacion.svg'
import directorio from './img/Paguina de Directorio.svg'

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#7e8085',
                        '--TextField-brandBorderHoverColor': '#F1F0F1',
                        '--TextField-brandBorderFocusedColor': '#FFB30F',
                        "color": 'var(----TextField-brandBorderFocusedColor)',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                        '& label': {
                            color: 'var(--TextField-brandBorderColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

export default function Index() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [open, setOpen] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [msg, setmsg] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const outerTheme = useTheme();


    const onSubmit = data => {
        console.log(data);

        setLoading(true)

        // MySwal.fire({
        //     didOpen: () => { Swal.showLoading() }
        // })

        axios({
            method: 'post',
            url: 'https://api.sheetmonkey.io/form/mYrRGtKqQTA7ntsAiBgbih',
            data: data
        }).then(Response => {
            // MySwal.fire({         // si ocurrio algun error muestro este mensaje
            //     title: <strong> Mensaje enviado </strong>,
            //     icon: 'success'
            // })


            setLoading(false)
            setmsg(true)

            console.log(Response)
        }).catch(error => {
            // MySwal.fire({         // si ocurrio algun error muestro este mensaje
            //     title: <strong> ${error} </strong>,
            //     icon: 'error'
            // })
        })
    }


    return (
        <BaseLayout handleOpen={handleOpen}> 
            <div className="Index">
                <div className='header'>
                    <h1>
                        Quick and <span> effortless </span> documentation.
                    </h1>
                    <p>
                        SimpleDoc simplifies the process of writing your API documentation, so you can publish it as quickly as possible.
                    </p>
                    <button onClick={handleOpen}>
                        Join the waiting list.
                    </button>

                    <div className='dots' />
                </div>

                <div className='feature'>
                    <div className='text'>
                        <p>Writing feature </p>
                        <h2>Write <span>easy</span> and build fast. </h2>
                        <p>Publish your documentation on the web and share it with two clicks. </p>
                    </div>
                    <div className='img'>
                        <img src={creacion} alt="" />
                    </div>
                </div>

                <div className='feature'>
                    <div className='text'>
                        <p>Sharing feature </p>
                        <h2>Public for <span>everyone</span> in seconts. </h2>
                        <p>Publish your documentation on the web and share it with two clicks. </p>
                    </div>
                    <div className='img'>
                        <img src={visualization} alt="" />
                    </div>
                </div>

                <div className='feature'>
                    <div className='text'>
                        <p>Storage feature </p>
                        <h2>All your documentation <br /> in <span>one</span> place. </h2>
                        <p>Store all your documentation documents here and they will be available everywhere, thanks to our public URL or API.</p>
                    </div>
                    <div className='img'>
                        <img src={directorio} alt="" />
                    </div>
                </div>

                <div className='CallToAction'>
                    <h2>Don't miss what's coming</h2>
                    <button onClick={handleOpen}> Stay in touch </button>
                    <div className='dots' />
                </div>
            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            // onClick={handleClose}
            >
                <div className="backdropdiv" onClick={()=> handleClose()}>
                <CloseIcon className="CloseIcon"/>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <p>
                            Thank you for being interested in Simple Doc, if you give us your email now we will keep you informed of all the news and you will have early access to the application.
                        </p>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                                label="Email"
                                variant="standard"
                                fullWidth
                                {...register("Email")}
                            />
                        </ThemeProvider>

                        <div className='butonContainer'>

                            {Loading ?
                                <>
                                    <button disabled> enviar </button>
                                    <CircularProgress color="inherit" />
                                </>
                                :
                                <>
                                    <button type="submit"> enviar </button>
                                </>
                            }
                        </div>

                        {msg ? <p className="msg">Thanks for the support!!</p> : null }

                    </form>
                </div>
            </Backdrop>
        </BaseLayout>

    );
}
