// css
import './CustomSelect.css';

export default function CustomSelect(props) {
    const { children } = props

    return (
        <div class="dropdown">
            <span className="dropbtn"> Información </span>
            <div class="dropdown-content">
                {/* <a href="#Autoridades"> Autoridades </a>
                <a href="#"> Auspicios </a>
                <a href="#Tematica"> Informacion general </a> */}

                {children}
            </div>
        </div>
    );
}
