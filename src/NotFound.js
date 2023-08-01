import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
             <h2>SORRY</h2>
             <p>PAGE NOT FOUND</p>
             <Link to="/">BACK TO THE HOMEPAGE......</Link>
        </div>
     );
}
 
export default NotFound;