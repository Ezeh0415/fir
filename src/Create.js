import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState( false );
    const history = useHistory();
    const  handleSubmit = (e) => {
      e.preventDefault()

      const blog = { title, body, author }

      setIsPending(true);

       fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
       }).then(() => {
        console.log('new blog added')
        setIsPending( false );
        // history.go(-1)
        history.push('/');
       })
    }
    return ( 
        <div className="create">
            <h2>add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog title</label>
                <input type="text" required 
                value={title}  
                onChange={(e) => setTitle(e.target.value)}/>
                <label>blog body</label>
               <textarea required 
               value={body} 
               onChange={(e) => setBody(e.target.value)}> </textarea>
               <label>blog author</label>
             <select 
               value={author} 
               onChange={(e) => setAuthor(e.target.value)}
            >
               <option value="mario">mario</option>
               <option value="luigi">luigi</option>
             </select>
             { !isPending && <button>add blog</button> }
             { isPending && <button disabled>addind blog.... </button> }
            </form>
        </div>
     );
}
 
export default Create;