/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const CoverContainer = styled.section`
	position: relative;
	top: 8.75rem;
	flex: 1;
	display: flex;
	align-items: center;
	padding: 0 8.75rem;
	gap: 8.125rem;
`;

export const BoxDetail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	max-width: 25.7094rem;
	width: 100%;

	h1 {
		background: ${({ theme }) => theme['gradient-green']};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		font-weight: 800;
		font-size: 3.25rem;
	}

	p {
		color: ${({ theme }) => theme.white};
		font-weight: 400;
		font-size: 1.25rem;
	}
`;

export const BoxIcons = styled.div`
	display: flex;
	gap: 1rem;
`;

export const BoxResume = styled.div`
	position: absolute;
	right: 8.75rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const UploadButton = styled.div`
	label {
		cursor: pointer;
		font-weight: 600;
		font-size: 1rem;
		display: flex;
		gap: 0.4063rem;
		align-items: center;
		justify-content: flex-end;
		color: ${({ theme }) => theme['green-03']};
		border-radius: 12px;
		user-select: none;
	}
`;

export const WhatsappButton = styled.a`
	width: 12.25rem;
	height: 2.75rem;

	display: flex;
	gap: 0.6875rem;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	color: ${({ theme }) => theme['green-03']};
	border-radius: 16px;

	border: 1px solid ${({ theme }) => theme['green-02']};
`;
