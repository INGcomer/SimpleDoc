import './NabBar.css';
import logoclaro from './img/logo claro.svg'

export default function Navbar({ handleOpen }) {
  return (
    <div className="navbar">

      <a href="/">
        <img src={logoclaro} alt="" />
      </a>

      <div className='links'>
        <button onClick={handleOpen}> Join Us </button>
      </div>
    </div>
  );
}
