import styled from "styled-components";
import ChromeLogo from "../assets/logo-chrome.svg";
import FireFoxLogo from "../assets/logo-firefox.svg";
import OperaLogo from "../assets/logo-opera.svg";
import { Button } from "./Button";
import Dots from "../assets/bg-dots.svg";

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
		<Card $id={id}>
			<CardImage src={image} alt={alt} />
			<CardHeading>{heading}</CardHeading>
			<CardParagraph>{paragraph}</CardParagraph>
			<BackgroundDot src={Dots} />
			<CardButton>Add & Install Extension</CardButton>
		</Card>
	);
};

//Styled Components

const CTASection = styled.section`
	margin-top: 200px;
	justify-items: center;
	align-content: center;
	h1 {
		margin-block-end: 32px;
		font-weight: 500;
		font-size: 30px;
		text-align: center;
	}
`;

const CTAParagraph = styled.p`
	margin-block: 32px;
	line-height: 1.5;
	font-size: 16px;
	color: var(--grayishblue);
	text-align: center;
	max-inline-size: 500px;
`;

const CardsContainer = styled.div`
	display: inline-flex;
	align-items: start;
	gap: 32px;
`;

const Card = styled.article<{ $id?: number }>`
	background-color: white;
	box-shadow: 0px 10px 16px hsla(231, 69%, 60%, 0.15);
	margin-top: ${({ $id }) => ($id === 2 ? "40px" : $id === 3 ? "80px" : "")};
	padding-inline: 20px;
	padding-block: 32px 20px;
	border-radius: 16px;
	justify-items: center;
	position: relative;
	overflow: hidden;
`;

const CardImage = styled.img`
	width: 100%;
	max-width: 100px;
	margin-bottom: 36px;
`;

const CardHeading = styled.h3`
	text-align: center;
	margin-bottom: 20px;
	font-size: 20px;
	color: var(--verydarkblue);
`;

const CardParagraph = styled.p`
	text-align: center;
	margin-bottom: 72px;
	color: var(--grayishblue);
`;

const BackgroundDot = styled.img`
	display: block;
	position: absolute;
	left: 0;
	bottom: 94px;
`;

const CardButton = styled(Button)`
	background-color: var(--blue);
	color: white;
`;
