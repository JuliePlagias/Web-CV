import { Link } from "react-router-dom";

export default function Button({text,to, className=""}){
    return (

        <button className={`button ${className}`}>
            <Link className="link" to={to}>
                {text}
            </Link>
        </button>
    );
}