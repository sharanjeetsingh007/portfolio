import React, { useState, useRef } from 'react'
import "./Contact.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import emailjs from 'emailjs-com';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import { Fade } from 'react-reveal';






function Contact() {

    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);





    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_Service_id, process.env.REACT_APP_TEMPALTE_id, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text, 'result');

                setOpenSuccess(true)


            }, (error) => {
                console.log(error.text, 'error');
                setOpenFail(true)

            });

        e.target.reset()


        console.log('clicked')
    }
    // console.log(form.current, 'clicked')


    const handleClose = (event) => {
        // if (reason === 'clickaway') {
        //     return;
        // }

        setOpenSuccess(false);
        setOpenFail(false);

    };


    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className='Contact' id="contact">
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}

            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message Send Successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={openFail} autoHideDuration={6000} onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}

            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Something Went Wrong, Try again!
                </Alert>
            </Snackbar>
            <div className='contacts__main'>
                <div className='heading'>
                    <h3>Contact</h3>
                </div>
                <Fade duration={900}>

                    <div className='contacts__wrapper'>


                        <div className='contact___left'>
                            <p>Get in Touch</p>
                            <h4>Talk Or Meet With Me</h4>
                            <div className='contact__options'>
                                <div className='option'>
                                    <div className='icon'>
                                        <LocalPhoneIcon />
                                    </div>
                                    <div className='details'>
                                        <p>Call Me Now</p>
                                        <p>0470393756</p>
                                    </div>


                                </div>
                                <div className='option'>
                                    <div className='icon'>
                                        <MailIcon />
                                    </div>
                                    <div className='details'>
                                        <p>Contact Me</p>
                                        <p>sharanjeet10singh@gmail.com</p>
                                    </div>


                                </div>
                                <div className='option'>
                                    <div className='icon'>
                                        <HomeIcon />
                                    </div>
                                    <div className='details'>
                                        <p>Get Me here</p>
                                        <p>12 Boronia Ave, Epping,NSW</p>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className='contact__right'>
                            <p>Contact Me</p>
                            <h4>Let Me Know Here</h4>
                            <div className='form__wrapper'>
                                <form onSubmit={handleSubmit} ref={form}>
                                    <div className='row-1'>
                                        <input type="text" placeholder="Your Name" name="to_name" required onChange={(e) => setName(e.target.value)} />
                                        <input type="email" placeholder="Your Email" name="from_name" required onChange={(e) => setEmail(e.target.value)} />

                                    </div>
                                    <div className='row-2'>
                                        <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                                        <input type="tel" placeholder="123-456-7890" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="phone" required onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className='row-3'>
                                        <textarea type="text" placeholder="Your Message" name='message' required onChange={(e) => setMessage(e.target.value)} />
                                    </div>
                                    <button type='submit'>Send Message</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Contact