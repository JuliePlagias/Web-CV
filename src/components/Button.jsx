import { Link } from "react-router-dom";

export default function Button({text,to, className=""}){
    function topScroll()
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (

        <button className={`button ${className}`}>
            <Link className="link" to={to} onClick={topScroll}>
                {text}
            </Link>
        </button>
    );
}