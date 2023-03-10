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
				<Tag variant="primary">๐ง Sobre mim</Tag>

				<BoxDetail>
					<h1>Jhollyfer Rodrigues </h1>
					<span>indio.dev</span>

					<BoxParagraph>
						<p>
							๐ Me chamo Jhollyfer Rodrigues, mas pode me chamar apenas de
							Jhollyfer
						</p>

						<div>
							<p>
								๐จโ๐ป Hรก mais de 5 anos desenvolvendo e programando interfaces com
								JavaScript, React JS e Typescript.
							</p>
							<p>
								๐ Graduado em Engenharia de Softaware pela Universidade Federal
								do Amazonas.
							</p>
							<p>
								๐ก Interesses em desenvolvimento Front-end com React, React
								Native, VueJS e Back-end com adonis.
							</p>
						</div>
						<p>๐ Frase top sua</p>
					</BoxParagraph>
				</BoxDetail>
			</Box>
		</AboutContainer>
	);
}
