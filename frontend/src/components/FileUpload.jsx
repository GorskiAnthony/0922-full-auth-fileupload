import { useState } from "react";
import instance from "../helpers/axios";

const FileUpload = () => {
	const [img, setImg] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("img", img);

		instance
			.post("/file", formData)
			.then((res) => console.log(res.data))
			.catch((err) => console.error(err));
	};

	const handleChange = (e) => {
		setImg(e.target.files[0]);
	};

	return (
		<div style={{ background: "#A1A1A1" }}>
			<h1>Envoi du fichier</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="img">Fichier</label>
				<input
					type="file"
					name="img"
					id="img"
					onChange={handleChange}
				/>
				<button type="submit">Envoyer le fichier 🚀</button>
			</form>
		</div>
	);
};

export default FileUpload;
