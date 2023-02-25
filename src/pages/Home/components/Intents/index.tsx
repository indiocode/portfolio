import type { ReactElement } from 'react';

import { CodeImage, ProjectImage } from '~/assets';

import {
	Box,
	BoxCard,
	CardFooter,
	CardHeader,
	IntentsContainer,
} from './styles';

export function Intents(): ReactElement {
	return (
		<IntentsContainer>
			<Box>
				<BoxCard>
					<CardHeader>
						<img
							src={CodeImage}
							alt="Code Image"
						/>
						<span>3 anos como</span>
						<h1>Front-end</h1>
					</CardHeader>

					<CardFooter>
						<span>Desenvolvedor</span>
						<h2>Front-end</h2>
					</CardFooter>
				</BoxCard>

				<BoxCard>
					<CardHeader>
						<img
							src={ProjectImage}
							alt="Code Image"
						/>
						<span>6 anos de</span>
						<h1>Trabalhos</h1>
					</CardHeader>

					<CardFooter>
						<span>Dezenas de projetos e</span>
						<h2>Experiências</h2>
					</CardFooter>
				</BoxCard>

				<BoxCard>
					<CardHeader>
						<img
							src={CodeImage}
							alt="Code Image"
						/>
						<span>4 anos como</span>
						<h1>Back-end</h1>
					</CardHeader>

					<CardFooter>
						<span>Desenvolvedor</span>
						<h2>Back-end</h2>
					</CardFooter>
				</BoxCard>
			</Box>
		</IntentsContainer>
	);
}
