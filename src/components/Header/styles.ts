/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
	padding: 2.5rem 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Navbar = styled.nav`
	display: flex;
	padding: 1rem 2rem;
	background-color: rgba(23, 24, 25, 0.8);
	box-shadow: rgb(34 37 38 / 2%) 0px 0px 0px 1px inset,
		rgb(0 0 0 / 5%) 0px 4px 30px 0px;
	border-radius: 100px;

	ul {
		display: flex;
		align-items: center;
		gap: 1rem;

		li {
			list-style: none;
			a {
				text-decoration: none;
				flex: 1;
				font-weight: 700;
				font-size: 1.125rem;
				color: ${({ theme }) => theme.white};

				&:hover {
					color: ${({ theme }) => theme['green-02']};
					transition: color 0.2s, font-weight 0.2s;
				}
			}
		}
	}
`;
