import type { ReactElement } from 'react';

import { HeaderContainer, Navbar } from './styles';

export function Header(): ReactElement {
	return (
		<HeaderContainer>
			<Navbar>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Sobre mim</a>
					</li>
					<li>
						<a href="#">Portfólio</a>
					</li>
					<li>
						<a href="#">Skills</a>
					</li>
					<li>
						<a href="#">Carreira</a>
					</li>
					<li>
						<a href="#">Contato</a>
					</li>
				</ul>
			</Navbar>
		</HeaderContainer>
	);
}
