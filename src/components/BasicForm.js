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
			firstName: "",
			lastName: "",
			message: "",
			acceptedTos: "",
		},
		validationSchema: basicSchema,
		onSubmit,
	});

	console.log(errors);

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div>
				<h1>Contact Me</h1>
				<p>Hi there, contact me to ask me about anything you have in mind.</p>
			</div>

			<label htmlFor="first_name">First name</label>
			<input
				id="first_name"
				type="text"
				placeholder="Enter your First name"
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors.firstName && touched.firstName ? "input-error" : ""}
			/>
			{errors.firstName && touched.firstName && (
				<p className="error">{errors.firstName}</p>
			)}
			<label htmlFor="last_name">Last name</label>
			<input
				id="last_name"
				type="text"
				placeholder="Enter your Last name"
				value={values.lastName}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors.lastName && touched.lastName ? "input-error" : ""}
			/>
			{errors.lastName && touched.lastName && (
				<p className="error">{errors.lastName}</p>
			)}

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
				className={
					errors.acceptedTos && touched.acceptedTos ? "input-error" : ""
				}
			/>
			<span>
				You agree to providing your data to jeffery who may contact you.
			</span>
			{errors.acceptedTos && touched.acceptedTos && (
				<p className="error">{errors.acceptedTos}</p>
			)}
			<button disabled={isSubmitting} type="submit" id="‘btn__submit">
				Send message
			</button>
		</form>
	);
};
export default BasicForm;
