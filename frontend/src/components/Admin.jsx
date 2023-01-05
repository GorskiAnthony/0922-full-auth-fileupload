import instance from "../helpers/axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const navigate = useNavigate();
	instance
		.get("/admin")
		.then((res) => console.log(res.data))
		.catch((err) => {
			console.error(err);
			navigate("/");
		});

	return <h1>Admin</h1>;
};

export default Admin;
