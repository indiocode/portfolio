/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const IntentsContainer = styled.section`
	flex: 1;
	margin: 0 auto;
	max-width: 103.75rem;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 128px 0;
`;

export const Box = styled.div`
	display: flex;
	gap: 5rem;
	flex: 1;
	justify-content: center;

	/* added border at HeaderBox */
	& > div:not(:nth-child(2)) > div:not(:last-child) {
		border: 1px solid ${({ theme }) => theme['blue-01']};
	}
`;

export const BoxCard = styled.div`
	max-width: 15.375rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	cursor: pointer;
`;

export const CardHeader = styled.div`
	/* flex: 1; */
	width: 100%;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding-top: 2.625rem;
	padding-bottom: 1.875rem;

	img {
		width: 4.5rem;
		height: 4rem;
	}

	span {
		font-weight: 400;
		font-size: 1rem;
	}

	h1 {
		font-weight: 700;
		font-size: 2rem;
	}
`;

export const CardFooter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.25rem;

	span {
		font-weight: 400;
		font-size: 1rem;
	}

	h2 {
		background: ${({ theme }) => theme['grandient-blue']};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
`;
