import styled from "styled-components";

export default function CallToAction() {
	return (
		<CTASection>
			<h1>Download the extension</h1>
			<p>
				We've got more browsers in the pipeline. Please do let us know if you've got a favorite
				you'd like us to prioritize.
			</p>
		</CTASection>
	);
}

const CTASection = styled.section`
	margin-top: 260px;
	h1 {
		margin-block-end: 32px;
		font-weight: 500;
		font-size: 30px;
		text-align: center;
	}
	p {
		margin-block: 32px;
		line-height: 1.5;
		font-size: 16px;
		color: var(--grayishblue);
		text-align: center;
	}
`;
