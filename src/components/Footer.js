import styled from "styled-components";
const Footer = () => {
	return (
		<>
			<Wrapper className="bottom">
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
	margin-bottom: 2rem;
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
