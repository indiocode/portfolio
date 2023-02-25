/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const TimelineContainer = styled.section`
	flex: 1;
	margin: 0 auto;
	max-width: 103.75rem;
	width: 100%;
	text-align: center;

	margin-top: 8.3125rem;

	h1 {
		padding: 1.75rem;
	}
`;

export const Box = styled.div`
	display: flex;
	gap: 15.0625rem;
`;

export const BoxColumn = styled.div`
	padding-top: 4rem;
	flex: 1;
	max-width: 36.25rem;
	width: 100%;
`;

export const BoxHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	h1 {
		font-weight: 800;
		font-size: 2rem;
	}
	p {
		font-weight: 400;
		font-size: 1.5rem;
	}
`;

export const BoxCard = styled.div`
	padding-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;
`;

export const Card = styled.div`
	text-align: initial;
	padding: 1.875rem;
	border: 1px solid ${({ theme }) => theme['blue-01']};
	width: 36.25rem;
	height: 13.75rem;
	border-radius: 16px;
	user-select: none;

	display: flex;
	flex-direction: column;
	gap: 3rem;

	&:hover {
		background: ${({ theme }) => theme['dark-light']};
		transition: background-color 0.2s;
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h2 {
		font-weight: 700;
		font-size: 1.25rem;
	}

	p {
		font-weight: 400;
		font-size: 16px;
	}
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;

	span {
		background: linear-gradient(144.94deg, #31e1f7 15.2%, #3168f7 84.63%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		font-size: 1.125rem;

		&:first-child {
			font-weight: 700;
		}
		&:last-child {
			font-weight: 400;
		}
	}
`;
