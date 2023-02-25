/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const ContactContainer = styled.section`
	flex: 1;
	margin: 0 auto;
	max-width: 103.75rem;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 8rem;

	h1 {
		padding-top: 1.5rem;
		padding-bottom: 8rem;
		font-weight: 800;
		font-size: 3rem;
	}
`;

export const WhatsappButton = styled.a`
	width: 15.375rem;
	height: 3.75rem;

	display: flex;
	gap: 0.6875rem;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	color: ${({ theme }) => theme['green-03']};
	border-radius: 16px;

	border: 1px solid ${({ theme }) => theme['green-02']};
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	gap: 2.5rem;
`;

export const BoxContact = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	img {
		width: 1.375rem;
		height: 1.375rem;
	}
`;

export const ContactContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		font-weight: 400;
		font-size: 1.25rem;
	}
`;

export const GoTop = styled.a`
	text-decoration: none;
	cursor: pointer;
	display: flex;
	gap: 1.3125rem;
	align-items: center;
	margin-top: 4.3125rem;

	color: ${({ theme }) => theme.white};
	font-weight: 600;
	font-size: 1.25rem;
`;
