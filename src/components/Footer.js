import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../data";
const Footer = () => {
	const SocialIconStyle = {
		width: "30px",
		height: "30px",
		borderRadius: "50%",
		backgroundColor: "blue",
	};

	return (
		<>
			<Wrapper className="bottom">
				<FooterTop id="social-links">
					<a
						href="https://hng9.slack.com/messages/C041JU70S5U/team/U0482L1J9FY"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="slack.png" alt="slack" />
					</a>
					<a
						href="https://www.github.com/jcolejeff"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="github.png" alt="github" />
					</a>
				</FooterTop>
				<hr />
				<FooterContainer>
					<img src="zuri_logo.png" alt="logo" />
					<p>HNG Internship 9 Frontend Task</p>
					<img src="I4G.png" alt="I4G logo" />
				</FooterContainer>
			</Wrapper>
		</>
	);
};

export default Footer;

const Wrapper = styled.footer``;
const FooterContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
	padding-inline-start: 1rem;
	padding-inline: 6rem;
	img {
		margin-block-start: 1rem;
	}
	p {
		opacity: 0.9;
		font-size: 1rem;
	}

	@media (max-width: 40em) {
		flex-direction: column;
		align-items: flex-start;
		padding-inline-start: 2rem;
	}
`;

const FooterTop = styled.section`
	display: flex;
	gap: 1.3rem;
	justify-content: center;
	margin-block: 2rem 8rem;
`;
