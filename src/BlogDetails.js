import { useParams } from "react-router-dom";
import useFetch from "./usefech";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, ispending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory()
    const handleclick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
          history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
           { ispending && <div> Loading.. </div> }
           {error && <div> {error} </div> }
           {blog && (
            <article>
                <h1> {blog.title} </h1>
                <p> written by { blog.author} </p>
                <h2> {blog.body}</h2>
                <button onClick={handleclick}>delete</button>
            </article>
           )}
        </div>
     );
}
 
export default BlogDetails;