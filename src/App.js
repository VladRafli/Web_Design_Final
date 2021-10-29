import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/style.css';
import Index from "./pages/Index";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index>
            <Home />
          </Index>
        </Route>
        <Route exact path="/menu">
          <Index>
            
          </Index>
        </Route>
        <Route exact path="/order">
          <Index>
            
          </Index>
        </Route>
        <Route exact path="/coming-soon">
          <Index>
            
          </Index>
        </Route>
        <Route exact path="/about-us">
          <Index>
            
          </Index>
        </Route>
      </Switch>
    </Router>
  );
}
