import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";
function Home() {
	const [inDate, setInDate] = useState(new Date());
	const [outDate, setOutDate] = useState(new Date());
	const [input, setInput] = useState("");
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setText([input, ...text]);
		setInput("");
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className="line1">
					<label>First Name:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Last Name:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Phone No:</label>
					<br />
					<input
						type="number"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Email:</label>
					<br />
					<input
						type="email"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
				</div>
				<div className="line2">
					<label>Contact Person:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Department:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Purpose:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label for="Appointment">On Appointment:</label>
					<br />
					Yes{" "}
					<input
						name="Appointment"
						type="radio"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>{" "}
					No{" "}
					<input
						name="Appointment"
						type="radio"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
				</div>
				<div className="line3">
					<label>Company Name:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Address:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Tel. No:</label>
					<br />
					<input
						type="number"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
				</div>
				<div className="line4">
					<label>Carrying Object:</label>
					<br />
					Yes{" "}
					<input
						name="object"
						type="radio"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>{" "}
					No{" "}
					<input
						name="object"
						type="radio"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Vehicle No:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<label>Driver's Name:</label>
					<br />
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
				</div>
				<div className="line5">
					<label>Date & Time In:</label>
					<br />
					<DatePicker
						selected={inDate}
						onChange={(date) => setInDate(date)}
						showTimeInput
						showWeekNumbers
						showYearDropdown
						dateFormat="PPPPpp"
					/>
					<br />
					<label>Date & Time Out:</label>
					<br />
					<DatePicker
						selected={outDate}
						onChange={(date) => setOutDate(date)}
						showTimeInput
						showWeekNumbers
						showYearDropdown
						dateFormat="PPPPppp"
					/>

					<br />
				</div>
			</form>
		</div>
	);
}

export default Home;
