import NAVBAR from "./Navbar";
import Moon from "./Moon";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
      <div className="home">
      <NAVBAR />
      </div>
      <div className="test">
         <Switch>
            <Route exact path="/"> 
                <Moon />
            </Route>
            <Route exact path="/create"> 
                <Create />
            </Route>
            <Route exact path="/blog/:id"> 
                <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
         </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
