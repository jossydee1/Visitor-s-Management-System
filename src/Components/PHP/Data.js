import React, { useEffect, useState } from "react";
import "./Data.css";

//For getting data from the database

const Data = () => {
	const [item, setItem] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/api/get")
			.then((res) => res.json())
			.then((result) => {
				setItem(result);
			});
	}, []);
	return (
		<div>
			<div className="table">
				<table>
					<thead className="table__head">
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Phone number</th>
							<th>Email</th>
							<th>Contact Person</th>
							<th>Department</th>
							<th>Purpose</th>
							<th>On Appointment</th>
							<th>Company Name</th>
							<th>Company Address</th>
							<th>Company Tel</th>
							<th>Carrying Object</th>
							<th>Vehicle Number</th>
							<th>Driver's Name</th>
							<th>Time In</th>
							<th>Time Out</th>
						</tr>
					</thead>
					<tbody className="table__body">
						{item.map((data) => (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.firstName}</td>
								<td>{data.lastName}</td>
								<td>{data.phone_number}</td>
								<td>{data.email}</td>
								<td>{data.contact_person}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Data;
