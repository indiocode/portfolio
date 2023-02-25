/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const AboutContainer = styled.section`
	margin: 0 auto;
	max-width: 103.75rem;
	width: 100%;
	display: flex;
	gap: 6.5625rem;
`;

export const Box = styled.div`
	padding: 3.75rem 0;
`;

export const BoxDetail = styled.div`
	display: flex;
	flex-direction: column;

	h1,
	span {
		font-size: 3rem;
	}

	h1 {
		margin-top: 1.5rem;
		font-weight: 800;
	}

	span {
		background: ${({ theme }) => theme['grandient-blue']};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}
`;

export const BoxParagraph = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	p {
		line-height: 2rem;
		font-weight: 400;
		font-size: 1.125rem;
	}
`;
