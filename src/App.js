import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./app.css";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/home/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/product/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct.jsx";

function App() {
	return (
		<Router>
			<Topbar />

			<div className='container'>
				<Sidebar />

				<Switch>
					<Route path='/users'>
						<UserList />
					</Route>
					<Route path='/user/:userId'>
						<User />
					</Route>
					<Route path='/newUser'>
						<NewUser />
					</Route>

					<Route path='/products'>
						<ProductList />
					</Route>
					<Route path='/product/:productId'>
						<Product />
					</Route>
					<Route path='/newProduct'>
						<NewProduct />
					</Route>

					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
