import { useState } from "react";
import styled from "styled-components";
import { ChevronIcon } from "./Icons";

export default function FAQs() {
	const [active, setActive] = useState(1);
	const handleClick = (id: number) => {
		setActive(id);
	};
	return (
		<FAQsSection>
			<h1>Frequently Asked Questions</h1>
			<FAQsParagraph>
				Here are some of our FAQs. If you have any other questions you'd like answered please feel
				free to email us.
			</FAQsParagraph>

			<AccordionContainer>
				{accordionItems.map(({ id, question, answer }: AccordionItem) => (
					<Accordion
						key={id}
						id={id}
						question={question}
						answer={answer}
						active={active}
						handleClick={handleClick}
					/>
				))}
			</AccordionContainer>
		</FAQsSection>
	);
}

type AccordionItem = {
	id: number;
	question: string;
	answer: string;
};

type AccordionProps = AccordionItem & {
	active: number;
	handleClick: (id: number) => void;
};

const accordionItems: AccordionItem[] = [
	{
		id: 1,
		question: "What is Bookmark?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
	},
	{
		id: 2,
		question: "How can I request a new browser?",
		answer:
			"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
	},
	{
		id: 3,
		question: "Is there a mobile app?",
		answer:
			"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
	},
	{
		id: 4,
		question: "What about other Chromium browsers?",
		answer:
			"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
	},
];

const Accordion = ({ id, question, answer, active, handleClick }: AccordionProps) => {
	return (
		<AccordionList type="button" onClick={() => handleClick(id)}>
			<Header>
				<AccordionHeader>{question}</AccordionHeader>
				<ChevronIcon />
			</Header>
			{active === id && <AccordionParagraph>{answer}</AccordionParagraph>}
		</AccordionList>
	);
};

//Styled Components

const FAQsSection = styled.section`
	margin-top: 200px;
	justify-items: center;
	align-content: center;
	h1 {
		margin-block-end: 32px;
		font-weight: 500;
		font-size: 30px;
		text-align: center;
	}

	@media (max-width: 800px) {
		padding-inline: 1.5rem;
	}
`;

const FAQsParagraph = styled.p`
	margin-block: 32px;
	line-height: 1.5;
	font-size: 16px;
	color: var(--grayishblue);
	text-align: center;
	max-inline-size: 500px;
`;

const AccordionContainer = styled.div`
	width: 100%;
	max-width: 540px;
	display: flex;
	flex-direction: column;
`;

const AccordionList = styled.button`
	border-top: 0.5px solid var(--grayishblue);
	padding-block: 20px;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;

const AccordionHeader = styled.h4`
	font-weight: 400;
	font-size: 18px;
`;

const AccordionParagraph = styled.p`
	color: var(--grayishblue);
	line-height: 1.6;
`;
