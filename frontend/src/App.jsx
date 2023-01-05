import "./App.css";
import Admin from "./components/Admin";
import FileUpload from "./components/FileUpload";
import Auth from "./components/Auth";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li>
						<Link to="/">Auth</Link>
					</li>
					<li>
						<Link to="/file">File Upload</Link>
					</li>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="/file" element={<FileUpload />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
