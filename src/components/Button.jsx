import { Link } from "react-router-dom";

export default function Button({text,to}){
    return (
        <div className="button">
            <Link className="link" to={to}>
                {text}
            </Link>
        </div>
    );
}