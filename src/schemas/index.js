import * as yup from "yup";

export const basicSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	first_name: yup.string().required("Please enter your first name"),
	last_name: yup.string().required("Please enter your last name"),
	message: yup.string().required("Please enter a message"),
	acceptedTos: yup
		.boolean()
		.oneOf([true], "Please accept the terms of service"),
	// .required("Please accept the terms of service"),
});
