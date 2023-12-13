import './NabBar.css';
import logoclaro from './img/logo claro.svg'

export default function Navbar() {
  return (
    <div className="navbar">
        <img src={logoclaro} alt="" />
        <div className='links'>
            <button> Join Us </button>
        </div>
    </div>
  );
}
