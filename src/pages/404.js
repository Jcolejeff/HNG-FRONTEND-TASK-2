import React from "react";
import img from "../images/not-found.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
	return (
		<Wrapper className="full-page">
			<div>
				<img src={img} alt="not found" />
				<h3>Ohh! Page no found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	);
};

export default Error;

const Wrapper = styled.main`
	min-height: 100vh;
	text-align: center;
	margin-block-end: 4rem;
	img {
		width: 90vw;
		max-width: 600px;
		display: block;
		margin-bottom: 2rem;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: gray;
	}
	a {
		color: grey;
		text-decoration: underline;
		text-transform: capitalize;
	}
`;
