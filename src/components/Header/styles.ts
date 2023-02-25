/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
	padding: 2.5rem 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: ${({ theme }) => theme.background};
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Navbar = styled.nav`
	ul {
		display: flex;
		gap: 1rem;

		li {
			list-style: none;

			a {
				padding: 0.5rem 0;
				text-decoration: none;
				font-weight: 700;
				font-size: 1.125rem;
				color: ${({ theme }) => theme.white};

				&:hover {
					color: ${({ theme }) => theme['green-02']};
					font-weight: 400;
					transition: color 0.2s, font-weight 0.2s;
				}
			}
		}
	}
`;
