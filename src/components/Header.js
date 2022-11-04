import styled from "styled-components";
import { profileData } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
	const { photoLink, userName, slack } = profileData;
	return (
		<>
			<HeaderWrapper>
				<CustomImage effect="blur" src={photoLink} id="profile__img" />
				<img
					src="share_button_desktop.png"
					alt="share button"
					className="desktop share"
				/>
				<img
					src="share_button_mobile.png"
					alt="share_button"
					className="mobile share"
				/>
				<UserNameText id="twitter">@{userName}</UserNameText>
				<UserNameText id="slack">{slack}</UserNameText>
			</HeaderWrapper>
		</>
	);
};
export default Header;

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	@media (min-width: 40em) {
		.mobile {
			display: none;
		}
	}

	.share {
		position: absolute;
		left: 70%;
		bottom: 60%;
		width: 2rem;
	}
	#slack {
		display: none;
	}
`;

const CustomImage = styled(LazyLoadImage)`
	border-radius: 50%;
	width: 100px;
	height: 100px;
	margin: 5px;
	margin-block-start: 5rem;
`;

const UserNameText = styled.h4`
	color: black;
`;
