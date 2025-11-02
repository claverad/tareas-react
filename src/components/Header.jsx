
import fondo1 from '../assets/pizza7.avif';

const Header = (props) => {
    return (
        <div className="header-container">
            <img src={fondo1} className="logo" alt="Pizería Mamma mia" />
            <div className="header-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Header