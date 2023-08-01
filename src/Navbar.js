import { Link } from 'react-router-dom';

let link = document.getElementsByClassName("links");

const hide = () => {
    link.style.display = "none";
}


const navBar = () => {
    return (
        <div className="navheader">
            <div className="icon">
              <h1>the dojo blog</h1>
            </div>
           <div className="button">
                <button type='button' id='btn' onClick={hide}>|||</button>
           </div>
            <div className="links">
                <ul>
                    <Link to="/">home</Link>
                    <Link to="/create">new blog</Link>
                </ul>
            </div>
        </div>

    );
}

export default navBar;