import { Link } from "react-router-dom";

export default function Button({text,to, className=""}){
    return (
        <div className={`button ${className}`}>
            <Link className="link" to={to}>
                {text}
            </Link>
        </div>
    );
}