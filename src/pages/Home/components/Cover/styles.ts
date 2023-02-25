/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const CoverContainer = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 103.75rem;
	width: 100%;
	gap: 4.5rem;
`;

export const BoxMain = styled.div`
	display: flex;
	align-items: center;
	gap: 8.125rem;
`;

export const BoxImage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	gap: 4.5rem;

	img {
		width: 34.7469rem;
		height: 37.3881rem;
	}
`;

export const BoxToggle = styled.div`
	margin: 0 auto;
	max-width: 34.7469rem;
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		width: 2.8106rem;
		height: 77px;
	}
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
	display: flex;
	flex-direction: column;
	gap: 1rem;

	/* position: absolute;
	right: 0; */
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
