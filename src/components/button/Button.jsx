import { Link } from "react-router-dom";

import './button.scss';

const Button = ({ buttonText }) => {
    return (
        <Link to="" className="button"><button>{buttonText}</button></Link>
    )
}

export default Button;