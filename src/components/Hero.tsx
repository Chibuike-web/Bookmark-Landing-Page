import styled from "styled-components";
import { Button } from "./Button";
import HeroImage from "../assets/illustration-hero.svg";
import { motion } from "motion/react";

export default function Hero() {
	return (
		<HeroSection>
			<HeroWrapper>
				<Leftside>
					<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
						A Simple Bookmark Manager{" "}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.1 }}
					>
						A clean and simple interface to organize your favourite websites. Open a new browser tab
						and see your sites load instantly. Try it for free.
					</motion.p>
					<ButtonsContainer>
						<MotionPrimaryButton
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.7 }}
							type="button"
						>
							Get it on Chrome
						</MotionPrimaryButton>
						<MotionSecondaryButton
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.8 }}
							type="button"
						>
							Get it on Firefox
						</MotionSecondaryButton>
					</ButtonsContainer>
				</Leftside>
				<MotionRightSide
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<img src={HeroImage} alt="Image for Hero Section" />
				</MotionRightSide>
			</HeroWrapper>
		</HeroSection>
	);
}

// Styled Components
const HeroSection = styled.section`
	width: 100%;
	margin-inline: auto;
	max-inline-size: 68.75rem;
	display: flex;
	margin-block-start: 3rem;

	@media (max-width: 56.25rem) {
		display: block;
		padding-inline: 1.5rem;
		justify-items: center;
	}
`;

const HeroWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 75rem;

	@media (max-width: 56.25rem) {
		flex-direction: column-reverse;
		min-width: 0;
	}
`;

const Leftside = styled.aside`
	width: 100%;
	max-inline-size: 28.75rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h1 {
		font-size: 2.75rem;
		line-height: 1.1;
		font-weight: 500;
		letter-spacing: -0.01em;
		color: var(--verydarkblue);

		@media (max-width: 56.25rem) {
			text-align: center;
		}
	}

	p {
		letter-spacing: 0.05em;
		color: var(--grayishblue);
		letter-spacing: -0.001em;
		line-height: 1.5;

		@media (max-width: 56.25rem) {
			text-align: center;
		}
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: 56.25rem) {
		width: 100%;
	}
`;

const PrimaryButton = styled(Button)`
	background-color: var(--blue);
	color: white;

	@media (max-width: 56.25rem) {
		width: 100%;
	}

	&:hover {
		border: 0.125rem solid var(--blue);
		background: transparent;
		color: var(--blue);
		cursor: pointer;
	}
`;

const MotionPrimaryButton = motion(PrimaryButton);

const SecondaryButton = styled(Button)`
	background-color: var(--verylightgrayishblue);
	color: var(--verydarkblue);

	@media (max-width: 56.25rem) {
		width: 100%;
	}

	&:hover {
		border: 0.125rem solid var(--verydarkblue);
		background: transparent;
		cursor: pointer;
	}
`;

const MotionSecondaryButton = motion(SecondaryButton);

const RightSide = styled.aside`
	img {
		width: 100%;
	}
`;

const MotionRightSide = motion(RightSide);
