import type { ReactElement } from 'react';

import { ProfileImage } from '~/assets';
import { Tag } from '~/components/Tag';

import { AboutContainer, Box, BoxDetail, BoxParagraph } from './styles';

export function About(): ReactElement {
	return (
		<AboutContainer id="about">
			<img
				src={ProfileImage}
				alt="ProfileImage"
			/>

			<Box>
				<Tag variant="primary">🧐 Sobre mim</Tag>

				<BoxDetail>
					<h1>Jhollyfer Rodrigues </h1>
					<span>indio.dev</span>

					<BoxParagraph>
						<p>
							👋 Me chamo Jhollyfer Rodrigues, mas pode me chamar apenas de
							Jhollyfer
						</p>

						<div>
							<p>
								👨‍💻 Há mais de 5 anos desenvolvendo e programando interfaces com
								JavaScript, React JS e Typescript.
							</p>
							<p>
								🎓 Graduado em Engenharia de Softaware pela Universidade Federal
								do Amazonas.
							</p>
							<p>
								💡 Interesses em desenvolvimento Front-end com React, React
								Native, VueJS e Back-end com adonis.
							</p>
						</div>
						<p>🚀 Frase top sua</p>
					</BoxParagraph>
				</BoxDetail>
			</Box>
		</AboutContainer>
	);
}
