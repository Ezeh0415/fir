// import { useState, useEffect } from "react";
import Home from "./Home";
import useFetch from "./usefech";
const Moon = () => {

   const { data:blogs, ispending, error} = useFetch('http://localhost:8000/blogs')

    

    return (
      <div className="moon-head">
        {error && <div>{ error }</div>}
        {ispending && <div>loading....</div>}
        {blogs && <Home blogs={blogs} title="All blogs!" />} 
      </div>
    );
}
export default Moon;