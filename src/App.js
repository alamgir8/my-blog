
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import { PostProvider } from "./Components/Reducer/State/State";
import AddPost from "./Components/User/AddPost/AddPost";
import EditPost from "./Components/User/EditPost/EditPost";
import User from "./Components/User/User/User";
import UserDetails from "./Components/User/UserDetails/UserDetails";

function App() {
  return (
        <PostProvider>
            <Router>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/user/2/details/:userId'>
                        <UserDetails/>
                    </Route>
                    <Route path='/user/2'>
                        <User/>
                    </Route>
                    <Route path='/addPost'>
                      <AddPost/>
                    </Route>
                    <Route path='/editPost/:id'>
                      <EditPost/>
                    </Route>
                </Switch>
            </Router>   
        </PostProvider>
  );
}

export default App;
