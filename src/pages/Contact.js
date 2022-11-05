import styled from "styled-components";
import { BasicForm, Footer } from "../components";
const Contact = () => {
	return (
		<Wrapper>
			<BasicForm />
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 100vh;
	padding: 1rem;

	@media (min-width: 40em) {
		padding-block-start: 6rem;

		.names {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 3rem;
			justify-content: space-between;
		}
	}

	.error {
		color: rgba(248, 63, 35, 1);
		font-size: 0.75rem;
		text-align: left;
		margin-top: 0.25rem;
	}

	#checkbox {
		margin-block-start: 1.5rem;
	}

	form {
		width: 90%;
		margin-inline: auto;
		max-width: 780px;
		margin-block-end: 7rem;
		@media (min-width: 40em) {
			width: 60%;
			margin-block-end: 15rem;
		}
	}

	form label {
		font-size: 1rem;
		font-weight: bold;
		display: block;
		text-align: left;
		margin: 1rem 0 0.8rem 0;
		color: rgba(52, 64, 84, 1);
	}

	input,
	select,
	textarea {
		width: 100%;
		padding: 0.65rem 0.5rem;
		font-size: 1rem;

		border: 1px solid rgba(208, 213, 221, 1);

		border-radius: 10px;
		outline: none;
	}

	input:focus,
	select:focus,
	textarea:focus {
		border-color: rgba(132, 202, 255, 1);
		background: #ffffff;
		/* Primary/300 */
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
		border-radius: 8px;
	}

	input::placeholder,
	select::placeholder,
	textarea::placeholder {
		color: rgba(102, 112, 133, 1);
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
		color: white;
		border: none;
		border-radius: 10px;
		width: 100%;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		padding-block: 1rem;
		background: #1570ef;
		/* Primary/600 */

		border: 1px solid #1570ef;
		/* Shadow/xs */

		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		border-radius: 8px;

		transition: all 0.2s ease-in;
	}
	button:hover {
		/* Primary/700 */

		background: #175cd3;
		/* Primary/700 */

		border: 1px solid #175cd3;
		/* Shadow/xs */

		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		border-radius: 8px;
	}

	input.input-error,
	select.input-error,
	textarea.input-error {
		border: 1px solid rgba(248, 150, 135, 1);
	}

	button:disabled {
		/* Primary/200 */

		background: #b2ddff;
		/* Primary/200 */

		border: 1px solid #b2ddff;
		/* Shadow/xs */

		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		border-radius: 8px;
	}
`;
export default Contact;
