import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import AllData from "./Components/AllData/AllData";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FetchByDate from "./Components/FetchByDate/FetchByDate";
import FetchByName from "./Components/FetchByName/FetchByName";
import FetchByPhone from "./Components/FetchByPhone/FetchByPhone";
import FetchByEmail from "./Components/FetchByEmail/FetchByEmail";
import FetchByContactPerson from "./Components/FetchByContactPerson/FetchByContactPerson";
import FetchByDepartment from "./Components/FetchByDepartment/FetchByDepartment";
import FetchByCompany from "./Components/FetchByCompany/fetchByCompany";
import FetchByDriver from "./Components/FetchByDriver/FetchByDriver";
import Edit from "./Components/Edit/Edit";

function App() {
	const [username, dispatch] = useState();
	//BEM
	return (
		<Router>
			<div className="app">
				{/* {!username ? (
					<Login />
				) : ( */}
				<Switch>
					<Route path="/vms/login">
						<Login />
					</Route>
					<Route path="/vms/timeOut/:id" component={Edit}></Route>

					<Route path="/vms/date">
						<Header />
						<FetchByDate />
					</Route>
					<Route path="/vms/driver">
						<Header />
						<FetchByDriver />
					</Route>
					<Route path="/vms/company">
						<Header />
						<FetchByCompany />
					</Route>
					<Route path="/vms/department">
						<Header />
						<FetchByDepartment />
					</Route>
					<Route path="/vms/contactperson">
						<Header />
						<FetchByContactPerson />
					</Route>
					<Route path="/vms/email">
						<Header />
						<FetchByEmail />
					</Route>
					<Route path="/vms/phone">
						<Header />
						<FetchByPhone />
					</Route>
					<Route path="/vms/name">
						<Header />
						<FetchByName />
					</Route>
					<Route path="/vms/all">
						<Header />
						<AllData />
					</Route>
					<Route path="/vms/register">
						<Header />
						<Register />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
				{/* )} */}
			</div>
		</Router>
	);
}

export default App;
