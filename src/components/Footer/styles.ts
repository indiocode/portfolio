/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	height: 5.5rem;
	background: ${({ theme }) => theme['dark-light']};
	display: flex;
	padding: 0 8.125rem;
	position: absolute;
	left: 0;
	right: 0;
`;

export const Content = styled.div`
	display: flex;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
`;

export const BoxIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
