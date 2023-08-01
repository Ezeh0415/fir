import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = ({blogs, title, /*handleDelete*/}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
              {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`} >
          <h2>{ blog.title }</h2>
           <p>written by { blog.author }</p>
          </Link>
           
           {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
        </div>
    );
}
export default Home;