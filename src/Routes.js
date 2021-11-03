import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { Link } from "react-router-dom";

const Routes = () => {
  return (
		<BrowserRouter>
			<div id='navbar'>
        <h1>Vinson Catalogue</h1>
        <ul className='links'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
					</li>
					<li>
						<Link to='/'>About Us</Link>
					</li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;