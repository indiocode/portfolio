import type { ReactElement } from 'react';

import { GithubIcon, LinkedinIcon } from '~/assets';

import { BoxIcons, Content, FooterContainer } from './styles';

export function Footer(): ReactElement {
	return (
		<FooterContainer>
			<Content>
				<p>Copyright © Marcos Jhollyfer · 2022</p>
				<BoxIcons>
					<img
						src={LinkedinIcon}
						alt="Linkedin Icon"
					/>
					<img
						src={GithubIcon}
						alt="Github Icon"
					/>
				</BoxIcons>
			</Content>
		</FooterContainer>
	);
}
