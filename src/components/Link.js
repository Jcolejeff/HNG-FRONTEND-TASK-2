import styled from "styled-components";
import { linkData } from "../data";
import { Link } from "react-router-dom";
// import "react-lazy-load-image-component/src/effects/blur.css";
const Links = () => {
	return (
		<>
			<ParentWrapper>
				{linkData.map((item) => {
					const { link, id, name } = item;
					if (id === "contact") {
						return (
							<Link to={id} key={id} id={id}>
								{name}
							</Link>
						);
					}
					return (
						<CustomDiv
							className="shadow"
							href={link}
							id={id}
							target="_blank"
							rel="noopener noreferrer"
							key={id}
						>
							<p className="text-center">{name}</p>
						</CustomDiv>
					);
				})}
			</ParentWrapper>
		</>
	);
};

export default Links;

const CustomDiv = styled.a`
	margin-bottom: 15px;
	cursor: pointer;
	align-content: center;
	align-items: baseline;
	justify-content: center;
	padding: 5px;
	display: flex;
	height: max-content;
	color: black;
	background: #eaecf0;
	text-decoration: none;
	border: 1px solid #eaecf0;
	border-radius: 8px;
	width: 80vw;
	@media (max-width: 40em) {
		width: 80vw;
	}
	:hover {
		background-color: rgba(234, 236, 240, 0.1);
		transition: all 0.2s ease-in-out;
	}
	p {
		flex: 1;
		text-align: center;
	}
`;

const ParentWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	#contact {
		margin-bottom: 15px;
		cursor: pointer;
		align-content: center;
		align-items: baseline;
		justify-content: center;
		padding: 1.5rem 2rem;
		display: flex;
		height: max-content;
		color: black;
		background: #eaecf0;
		text-decoration: none;
		border: 1px solid #eaecf0;
		border-radius: 8px;
		width: 76vw;
		@media (max-width: 40em) {
			width: 68vw;
		}
		:hover {
			background-color: rgba(234, 236, 240, 0.1);
			transition: all 0.2s ease-in-out;
		}
		p {
			flex: 1;
			text-align: center;
		}
	}
`;
