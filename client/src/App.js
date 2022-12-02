import {Route,Routes,Navigate}from "react-router-dom";
import Signup from "./components/signup/index";
import Login from "./components/login.js/login";
import Main from "./components/main/index";
import EmailVerify from "./components/EmailVerify";


function App(){

    const user = localStorage.getItem("token");

    return(
     
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
		</Routes>
	);

}
export default App;