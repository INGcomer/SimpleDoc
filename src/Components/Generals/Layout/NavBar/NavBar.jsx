import './NabBar.css';
import logoclaro from './img/logo claro.svg'

export default function Navbar({handleOpen}) {
  return (
    <div className="navbar">
        <img src={logoclaro} alt="" />
        <div className='links'>
            <button onClick={handleOpen}> Join Us </button>
        </div>
    </div>
  );
}
