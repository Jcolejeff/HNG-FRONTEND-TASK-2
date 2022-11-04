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
	background: #1a202c;
	color: #f3f3f3;

	.error {
		color: #fc8181;
		font-size: 0.75rem;
		text-align: left;
		margin-top: 0.25rem;
	}

	.checkbox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 1rem;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
	}
	nav h3 {
		margin: 1rem;
		cursor: pointer;
		color: #718096;
	}
	nav h3:hover {
		color: white;
	}

	form {
		width: 95%;
		max-width: 80vw;
		margin: 0 auto;
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
		border: 2px solid #4a5568;
		background-color: #2d3748;
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
		margin: 1rem 0;
		padding: 0.35rem 0.5rem;
		background-color: #4299e1;
		color: #1a202c;
		border: none;
		border-radius: 3px;
		width: 100%;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
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
