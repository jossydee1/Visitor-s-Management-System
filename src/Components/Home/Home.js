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
		<div className="register">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className="line1">
					<label>
						First Name:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Last Name:
						<input
							name="last"
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Phone No:
						<input
							type="number"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Email:
						<input
							type="email"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line2">
					<label>
						Contact Person:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Department:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Purpose:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label for="Appointment">
						On Appointment: Yes{" "}
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
					</label>
					<br />
				</div>

				<div className="line3">
					<label>
						Company Name:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Address:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Tel. No:
						<input
							type="number"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line4">
					<label>
						Carrying Object: Yes{" "}
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
					</label>
					<br />

					<label>
						Vehicle No:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Driver's Name:
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />
				</div>

				<div className="line5">
					<label>
						Date & Time In:
						<DatePicker
							selected={inDate}
							onChange={(date) => setInDate(date)}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPpp"
						/>
					</label>
					<br />

					<label>
						Date & Time Out:
						<DatePicker
							selected={outDate}
							onChange={(date) => setOutDate(date)}
							showTimeInput
							showWeekNumbers
							showYearDropdown
							dateFormat="PPPPppp"
						/>
					</label>
					<br />
				</div>
			</form>
		</div>
	);
}

export default Home;
