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
					<Tab key={id} onClick={() => handleTabToggle(id)} active={activeSlider === id}>
						{text}
					</Tab>
				))}
			</TabContainer>
			<TabWrapper>
				{activeSlider === 1 ? (
					<>
						<img src={FeatureImage1} alt="Bookmark in one click" />
						<TabContent>
							<h1>Bookmark in one click</h1>
							<p>
								{" "}
								Organize your bookmarks however you like. Our simple drag-and-drop interface gives
								you complete control over how you manage your favourite sites.
							</p>
							<FeatureButton>More Info</FeatureButton>
						</TabContent>
					</>
				) : activeSlider === 2 ? (
					<>
						<img src={FeatureImage2} alt="Bookmark in one click" />
						<TabContent>
							<h1>Intelligent search</h1>
							<p>
								Our powerful search feature will help you find saved sites in no time at all. No
								need to trawl through all of your bookmarks.
							</p>
							<FeatureButton>More Info</FeatureButton>
						</TabContent>
					</>
				) : activeSlider === 3 ? (
					<>
						<img src={FeatureImage3} alt="Bookmark in one click" />
						<TabContent>
							<h1>Share your bookmarks</h1>
							<p>
								Share your bookmarks Easily share your bookmarks and collections with others. reate
								a shareable link that you can send at the click of a button.{" "}
							</p>
							<FeatureButton>More Info</FeatureButton>
						</TabContent>
					</>
				) : (
					""
				)}
			</TabWrapper>
		</FeatureSection>
	);
}

//Styled components

const FeatureSection = styled.section`
	margin-inline: auto;
	max-inline-size: 68.75rem;
	margin-block-start: 4rem;
	justify-items: center;
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
	margin-block: 4rem;
`;

interface TabProps {
	active?: boolean;
}
const Tab = styled(Button)<TabProps>`
	font-size: 15px;
	color: ${({ active }) => (active ? "var(--verydarkblue)" : "var(--grayishblue)")};
	font-weight: 500;
	position: relative;
	padding-block: 12px;

	&::after {
		content: "";
		position: absolute;
		background-color: ${({ active }) => (active ? "var(--red)" : "transparent")};
		width: 100%;
		height: 2px;
		left: 0;
		bottom: 0;
		transition: background-color 0.3s ease-in-out;
	}
`;

const TabWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const TabContent = styled.div`
	width: 100%;
	max-inline-size: 400px;
`;
