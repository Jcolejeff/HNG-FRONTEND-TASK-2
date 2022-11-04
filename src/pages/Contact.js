import styled from "styled-components";
import BasicForm from "../components/BasicForm";
const Contact = () => {
	return (
		<Wrapper>
			<BasicForm />
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 100vh;
	padding: 1rem;

	margin-block-end: 6rem;

	@media (min-width: 40em) {
		padding-block-start: 6rem;
		margin-block-end: 13rem;
		.names {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 3rem;
			justify-content: space-between;
		}
		form {
			width: 60%;
		}
	}

	.error {
		color: #fc8181;
		font-size: 0.75rem;
		text-align: left;
		margin-top: 0.25rem;
	}

	#checkbox {
		margin-block-start: 1.5rem;
	}

	form {
		width: 90%;
		margin: 0 auto;
		max-width: 780px;
	}

	form label {
		font-size: 1rem;
		font-weight: bold;
		display: block;
		text-align: left;
		margin: 1rem 0 0.8rem 0;
	}

	input,
	select,
	textarea {
		width: 100%;
		padding: 0.65rem 0.5rem;
		font-size: 1rem;
		color: white;
		border: 1px solid rgba(208, 213, 221, 1);

		border-radius: 10px;
		outline: none;
	}

	input:focus,
	select:focus,
	textarea:focus {
		border-color: #4299e1;
	}

	input::placeholder,
	select::placeholder,
	textarea::placeholder {
		color: #a0aec0;
	}

	input[type="checkbox"] {
		width: fit-content;
		margin-right: 0.5rem;
		transform: scale(1.25);
	}

	button {
		display: block;
		margin: 3rem 0;
		padding: 0.35rem 0.5rem;
		background-color: #4299e1;
		color: white;
		border: none;
		border-radius: 10px;
		width: 100%;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		padding-block: 1rem;
	}

	input.input-error,
	select.input-error,
	textarea.input-error {
		border-color: #fc8181;
	}

	button:disabled {
		opacity: 0.35;
	}
`;
export default Contact;
