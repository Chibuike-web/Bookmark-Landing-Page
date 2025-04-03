import styled from "styled-components";
import FooterLogo from "../assets/footer-logo.svg";
import { Button } from "./Button";
import { ListContainer } from "./Navbar";
import { FacebookIcon, TwitterIcon } from "./Icons";
import { useState } from "react";

export default function Footer() {
	return (
		<ContactUsSection>
			<Container>
				<Paragraph>35 000+ ALREADY JOINED</Paragraph>
				<Header>Stay up-to-date with what we're doing</Header>
			</Container>

			<EmailForm />
			<Bottom>
				<Nav>
					<Wrapper>
						<img src={FooterLogo} alt="Footer Logo" />
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

const EmailForm = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmail(value);
		if (value.trim().length === 0) {
			setError("");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) {
			setError("Email cannot be empty.");
			return;
		}

		if (emailRegex.test(email)) {
			setError("");
			console.log("Email is valid:", email);
		} else {
			setError("Whoops, make sure it's an email");
			console.log("Email is invalid:", email);
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputContainer>
				<Input
					type="text"
					value={email}
					name="email"
					placeholder="Enter your email address"
					onChange={(e) => handleChange(e)}
					$hasError={!!error}
				/>
				{error && <Error>{error}</Error>}
			</InputContainer>
			<FormButton type="submit">Contact Us</FormButton>
		</Form>
	);
};

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
	align-items: start;
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

const InputContainer = styled.div`
	width: 100%;
	max-width: 18.75rem;

	@media (max-width: 50rem) {
		max-width: 100%;
	}
`;

const Input = styled.input<{ $hasError: boolean }>`
	padding-inline: 1rem;
	width: 100%;
	padding-block: 0.4375rem;
	border: ${(props) => (props.$hasError ? "0.125rem solid var(--red)" : "none")};
	border-radius: 0.2rem;
	font-family: Rubik;
	outline: none;
	min-height: 2.5rem;
	color: var(--verydarkblue);

	&::placeholder {
		font-size: 0.8rem;
		color: var(--border);
		font-family: "Rubik";
	}
`;

const Error = styled.p`
	background-color: var(--red);
	color: white;
	width: 100%;
	padding-inline: 0.625rem;
	padding-block: 0.625rem 0.5rem;
	font-size: 0.625rem;
	margin-top: -0.375rem;
	font-style: italic;
	border-bottom-left-radius: 0.25rem;
	border-bottom-right-radius: 0.25rem;
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
	justify-items: center;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 68.75rem;
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
	gap: 1.5rem;
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
