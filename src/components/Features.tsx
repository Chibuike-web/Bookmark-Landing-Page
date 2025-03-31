import { useState } from "react";
import FeatureImage1 from "../assets/illustration-features-tab-1.svg";
import FeatureImage2 from "../assets/illustration-features-tab-2.svg";
import FeatureImage3 from "../assets/illustration-features-tab-3.svg";
import styled from "styled-components";
import { Button } from "./Button";

type TabType = {
	id: number;
	text: string;
};

const tabData: TabType[] = [
	{ id: 1, text: "Simple Bookmarking" },
	{ id: 2, text: "Speedy Searching" },
	{ id: 3, text: "Easy Sharing" },
];
export default function Features() {
	const [activeSlider, setActiveSlider] = useState(1);

	const handleTabToggle = (itemId: number) => {
		setActiveSlider(itemId);
	};
	return (
		<FeatureSection>
			<FeatureContent>
				<FeatureHeading>Features</FeatureHeading>
				<FeatureParagraph>
					Our aim is to make it quick and easy for you to access your favourite websites. Your
					bookmarks sync between your devices so you can access them on the go.
				</FeatureParagraph>
			</FeatureContent>
			<TabContainer>
				{tabData.map(({ id, text }: TabType) => (
					<Tab key={id} onClick={() => handleTabToggle(id)} $active={activeSlider === id}>
						{text}
					</Tab>
				))}
			</TabContainer>
			<TabWrapper>
				<BackgroundElement></BackgroundElement>
				{content.map(
					({ id, heading, description, image }: ContentData) =>
						activeSlider === id && (
							<Content key={id} id={id} heading={heading} description={description} image={image} />
						)
				)}
			</TabWrapper>
		</FeatureSection>
	);
}

interface ContentData {
	id: number;
	heading: string;
	description: string;
	image: string;
}

const content: ContentData[] = [
	{
		id: 1,
		heading: "Bookmark in one click",
		description: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
		image: FeatureImage1,
	},
	{
		id: 2,
		heading: "Intelligent search",
		description: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
		image: FeatureImage2,
	},
	{
		id: 3,
		heading: "Share your bookmarks",
		description: `Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.`,
		image: FeatureImage3,
	},
];

const Content = ({ id, image, heading, description }: ContentData) => {
	return (
		<>
			<TabImage $id={id}>
				<img src={image} alt="Bookmark in one click" />
			</TabImage>
			<TabContent>
				<h1>{heading}</h1>
				<p>{description}</p>
				<FeatureButton>More Info</FeatureButton>
			</TabContent>
		</>
	);
};

//Styled components

const FeatureSection = styled.section`
	margin-block-start: 4rem;
	justify-items: center;
	position: relative;
`;

const FeatureContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-inline-size: 500px;
	gap: 2.5rem;
`;

const FeatureHeading = styled.h1`
	font-size: 36px;
	font-weight: 500;
	text-align: center;
`;

const FeatureParagraph = styled.p`
	letter-spacing: 0.05em;
	color: var(--grayishblue);
	letter-spacing: -0.001em;
	line-height: 1.5;
	width: 100%;
	text-align: center;
`;

const FeatureButton = styled(Button)`
	background-color: var(--blue);
	color: white;
`;

const TabContainer = styled.div`
	display: flex;
	margin-block: 4rem;
`;

interface TabProps {
	$active?: boolean;
}

const Tab = styled(Button)<TabProps>`
	font-size: 15px;
	color: ${({ $active }) => ($active ? "var(--verydarkblue)" : "var(--grayishblue)")};
	font-weight: 500;
	position: relative;
	padding-block: 24px;
	padding-inline: 48px;
	border: none;

	&::after {
		content: "";
		position: absolute;
		background-color: ${({ $active }) => ($active ? "var(--red)" : "transparent")};
		width: 100%;
		height: 2px;
		left: 0;
		bottom: 0;
		transition: background-color 0.3s ease-in-out;
	}
`;

const TabWrapper = styled.div`
	justify-items: center;
	align-content: center;
	display: flex;
	gap: 126px;
	align-items: center;
`;

const BackgroundElement = styled.div`
	width: 50%; /* Adjust as needed */
	height: 350px;
	background-color: var(--blue);
	position: absolute;
	bottom: -50px;
	left: -50px;
	border-end-end-radius: 150px;
`;

const TabImage = styled.figure<{ $id?: number }>`
	position: relative;
	max-width: ${({ $id }) => ($id === 1 ? "536px" : $id === 2 ? "468px" : $id === 3 ? "440px" : "")};
	img {
		width: 100%;
	}
`;

const TabContent = styled.div`
	width: 100%;
	max-inline-size: 400px;
	h1 {
		margin-block-end: 32px;
		font-weight: 500;
		font-size: 30px;
	}
	p {
		margin-block: 32px;
		line-height: 1.5;
		font-size: 16px;
		color: var(--grayishblue);
	}
`;
