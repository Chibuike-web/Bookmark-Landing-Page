import styled from "styled-components";
import ChromeLogo from "../assets/logo-chrome.svg";
import FireFoxLogo from "../assets/logo-firefox.svg";
import OperaLogo from "../assets/logo-opera.svg";
import { Button } from "./Button";
import Dots from "../assets/bg-dots.svg";
import { motion } from "motion/react";

export default function CallToAction() {
	return (
		<CTASection>
			<h1>Download the extension</h1>
			<CTAParagraph>
				We've got more browsers in the pipeline. Please do let us know if you've got a favorite
				you'd like us to prioritize.
			</CTAParagraph>
			<CardsContainer>
				{cardData.map(({ id, image, alt, heading, paragraph }: CardType) => (
					<CTACard
						key={id}
						id={id}
						image={image}
						alt={alt}
						heading={heading}
						paragraph={paragraph}
					/>
				))}
			</CardsContainer>
		</CTASection>
	);
}

type CardType = {
	id: number;
	image: string;
	alt: string;
	heading: string;
	paragraph: string;
};
const cardData: CardType[] = [
	{
		id: 1,
		image: ChromeLogo,
		alt: "Chrome Logo",
		heading: "Add to Chrome",
		paragraph: "Minimum version 62",
	},
	{
		id: 2,
		image: FireFoxLogo,
		alt: "Firefox Logo",
		heading: "Add to Firefox",
		paragraph: "Minimum version 55",
	},
	{
		id: 3,
		image: OperaLogo,
		alt: "Opera Logo",
		heading: "Add to Opera",
		paragraph: "Minimum version 46",
	},
];

const CTACard = ({ id, image, alt, heading, paragraph }: CardType) => {
	return (
		<MotionCard
			$id={id}
			key={id}
			initial={{ opacity: 0, y: 150 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: id === 1 ? 0 : id === 2 ? 0.2 : 0.3 }}
			viewport={{ once: true }}
		>
			<CardImage src={image} alt={alt} />
			<CardHeading>{heading}</CardHeading>
			<CardParagraph>{paragraph}</CardParagraph>
			<BackgroundDot src={Dots} />
			<CardButton>Add & Install Extension</CardButton>
		</MotionCard>
	);
};

//Styled Components

const CTASection = styled.section`
	margin-top: 12.5rem;
	justify-items: center;
	align-content: center;
	h1 {
		margin-block-end: 2rem;
		font-weight: 500;
		font-size: 1.875rem;
		text-align: center;
	}

	@media (max-width: 50rem) {
		padding-inline: 1.5rem;
	}
`;

const CTAParagraph = styled.p`
	margin-block: 2rem;
	line-height: 1.5;
	font-size: 1rem;
	color: var(--grayishblue);
	text-align: center;
	max-inline-size: 31.25rem;
`;

const CardsContainer = styled.div`
	display: flex;
	align-items: start;
	gap: 2rem;

	@media (max-width: 50rem) {
		flex-direction: column;
	}
`;

const Card = styled.article<{ $id?: number }>`
	background-color: white;
	box-shadow: 0px 0.625rem 1rem hsla(231, 69%, 60%, 0.15);
	margin-top: ${({ $id }) => ($id === 2 ? "2.5rem" : $id === 3 ? "5rem" : "")};
	padding-inline: 1.25rem;
	padding-block: 2rem 1.25rem;
	border-radius: 1rem;
	justify-items: center;
	position: relative;
	overflow: hidden;

	@media (max-width: 50rem) {
		margin-top: 0;
	}
`;

const MotionCard = motion(Card);

const CardImage = styled.img`
	width: 100%;
	max-width: 6.25rem;
	margin-bottom: 2.25rem;
`;

const CardHeading = styled.h3`
	text-align: center;
	margin-bottom: 1.125rem;
	font-size: 1.25rem;
	color: var(--verydarkblue);
`;

const CardParagraph = styled.p`
	text-align: center;
	margin-bottom: 4.5rem;
	color: var(--grayishblue);
`;

const BackgroundDot = styled.img`
	display: block;
	position: absolute;
	left: 0;
	bottom: 6rem;
`;

const CardButton = styled(Button)`
	background-color: var(--blue);
	color: white;

	&:hover {
		border: 0.125rem solid var(--blue);
		background: transparent;
		color: var(--blue);
		cursor: pointer;
	}
`;
