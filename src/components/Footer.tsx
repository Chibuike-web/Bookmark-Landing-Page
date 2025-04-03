import styled from "styled-components";
import FooterLogo from "../assets/footer-logo.svg";
import { Button } from "./Button";
import { ListContainer } from "./Navbar";
import { FacebookIcon, TwitterIcon } from "./Icons";

export default function Footer() {
	return (
		<ContactUsSection>
			<Container>
				<Paragraph>35 000+ ALREADY JOINED</Paragraph>
				<Header>Stay up-to-date with what we're doing</Header>
			</Container>

			<Form action="">
				<Input type="email" name="email" placeholder="Enter your email address" />
				<FormButton type="submit">Contact Us</FormButton>
			</Form>
			<Bottom>
				<Nav>
					<Wrapper>
						<img src={FooterLogo} alt="" />
						<FooterLinks>
							<li>FEATURES</li>
							<li>PRICING</li>
							<li>CONTACT</li>
						</FooterLinks>
					</Wrapper>
					<SocialIcons>
						<SocialButton type="button">
							<StyledFacebookIcon />
						</SocialButton>
						<SocialButton type="button">
							<StyledTwitterIcon />
						</SocialButton>
					</SocialIcons>
				</Nav>
			</Bottom>
		</ContactUsSection>
	);
}
const ContactUsSection = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 9.375rem;
	padding-top: 3rem;
	background-color: var(--blue);
	align-items: center;
	color: white;
	width: 100%;
`;

const Container = styled.div`
	width: 100%;
	max-width: 28.125rem;

	@media (max-width: 50rem) {
		max-width: 100%;
	}
`;

const Paragraph = styled.p`
	letter-spacing: 0.3em;
	font-size: 0.875rem;
	text-align: center;
	margin-bottom: 2.5rem;
`;

const Header = styled.h2`
	font-size: 2rem;
	font-weight: 500;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 2rem;
	max-width: 28.125rem;
	width: 100%;
	min-height: 100%;

	@media (max-width: 50rem) {
		flex-direction: column;
		max-width: 100%;
		padding-inline: 2rem;
	}
`;

const Input = styled.input`
	padding-inline: 1rem;
	width: 100%;
	padding-block: 0.4375rem;
	border: none;
	border-radius: 0.1875rem;
	max-width: 18.75rem;
	outline: none;
	min-height: 2.5rem;
	color: var(--verydarkblue);

	@media (max-width: 50rem) {
		max-width: 100%;
	}

	&::placeholder {
		font-size: 0.8rem;
		color: var(--border);
		font-family: "Rubik";
	}
`;

const FormButton = styled(Button)`
	background-color: var(--red);
	color: white;

	&:hover {
		border: 0.125rem solid var(--red);
		background: white;
		color: var(--red);
		cursor: pointer;
	}

	@media (max-width: 50rem) {
		width: 100%;
	}
`;

const Bottom = styled.footer`
	background-color: var(--verydarkblue);
	margin-top: 2.5rem;
	width: 100%;
	padding-block: 3rem;
	padding-block: 3rem;
	justify-items: center;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 1100px;
	align-items: center;

	@media (max-width: 50rem) {
		flex-direction: column;
		gap: 3rem;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;

	@media (max-width: 50rem) {
		flex-direction: column;
	}
`;

const FooterLinks = styled(ListContainer)`
	color: white;
	@media (max-width: 50rem) {
		flex-direction: column;
		align-items: center;
	}
`;

const SocialIcons = styled.div`
	display: flex;
	gap: 24px;
`;

const SocialButton = styled.button`
	&:hover {
		color: red;
	}
`;

const StyledFacebookIcon = styled(FacebookIcon)`
	&:hover {
		path {
			transition: fill 0.3s ease;
			fill: var(--red);
		}
	}
`;

const StyledTwitterIcon = styled(TwitterIcon)`
	&:hover {
		path {
			transition: fill 0.3s ease;
			fill: var(--red);
		}
	}
`;
