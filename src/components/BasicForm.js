import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
	console.log(values);
	console.log(actions);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

const BasicForm = () => {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			email: "",
			first_name: "",
			last_name: "",
			message: "",
			acceptedTos: "",
		},
		validationSchema: basicSchema,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div>
				<h1>Contact Me</h1>
				<p>Hi there, contact me to ask me about anything you have in mind.</p>
			</div>
			<section className="names">
				<div>
					<label htmlFor="first_name">First name</label>
					<input
						id="first_name"
						type="text"
						placeholder="Enter your First name"
						value={values.first_name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.first_name && touched.first_name ? "input-error" : ""
						}
					/>
					{errors.first_name && touched.first_name && (
						<p className="error">{errors.first_name}</p>
					)}
				</div>
				<div>
					<label htmlFor="last_name">Last name</label>
					<input
						id="last_name"
						type="text"
						placeholder="Enter your Last name"
						value={values.last_name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.last_name && touched.last_name ? "input-error" : ""
						}
					/>
					{errors.last_name && touched.last_name && (
						<p className="error">{errors.last_name}</p>
					)}
				</div>
			</section>
			<label htmlFor="email">Email</label>
			<input
				value={values.email}
				onChange={handleChange}
				id="email"
				type="email"
				placeholder="yourname@email.com"
				onBlur={handleBlur}
				className={errors.email && touched.email ? "input-error" : ""}
			/>
			{errors.email && touched.email && <p className="error">{errors.email}</p>}

			<label htmlFor="message">Message</label>
			<textarea
				value={values.message}
				onChange={handleChange}
				id="message"
				rows="8"
				type="textarea"
				placeholder="Send me a message and I'll reply you as soon as possible..."
				onBlur={handleBlur}
				className={errors.message && touched.message ? "input-error" : ""}
			/>
			{errors.message && touched.message && (
				<p className="error">{errors.message}</p>
			)}

			{/* <label htmlFor="checkbox">hello</label> */}
			<input
				value={values.acceptedTos}
				onChange={handleChange}
				id="checkbox"
				type="checkbox"
				placeholder=""
				onBlur={handleBlur}
				required
				className={
					errors.acceptedTos && touched.acceptedTos ? "input-error" : ""
				}
			/>
			<span>
				You agree to providing your data to Jeffery ikwuh who may contact you.
			</span>
			{errors.acceptedTos && touched.acceptedTos && (
				<p className="error">{errors.acceptedTos}</p>
			)}
			<button disabled={isSubmitting} type="submit" id="btn__submit">
				Send message
			</button>
		</form>
	);
};
export default BasicForm;
