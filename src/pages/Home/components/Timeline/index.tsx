import type { ReactElement } from 'react';

import { Tag } from '~/components/Tag';

import {
	Box,
	BoxCard,
	BoxColumn,
	BoxHeader,
	Card,
	CardContent,
	CardFooter,
	TimelineContainer,
} from './styles';

export function Timeline(): ReactElement {
	return (
		<TimelineContainer>
			<Tag variant="primary">💼 Carreira</Tag>
			<h1>Trajetória até aqui</h1>

			<Box>
				<BoxColumn>
					<BoxHeader>
						<h2>Área profissional</h2>
						<p>2020 · Atualmente</p>
					</BoxHeader>

					<BoxCard>
						<Card>
							<CardContent>
								<h2>Desenvolvedor Front-end na Ensinio</h2>
								<p>
									Desenvolvimento de features na aplicação principal e site. com
									React Js e Typescript, além do auxíllio de outras tecnologias
									como Next, Styled Components e padrões de arquitetura.
								</p>
							</CardContent>
							<CardFooter>
								<span>1 ano e 7 meses</span>
								<span>Abril/2021 · Atualmente</span>
							</CardFooter>
						</Card>
						<Card>
							<CardContent>
								<h2>Desenvolvedor Front-end na Ensinio</h2>
								<p>
									Desenvolvimento de features na aplicação principal e site. com
									React Js e Typescript, além do auxíllio de outras tecnologias
									como Next, Styled Components e padrões de arquitetura.
								</p>
							</CardContent>
							<CardFooter>
								<span>1 ano e 7 meses</span>
								<span>Abril/2021 · Atualmente</span>
							</CardFooter>
						</Card>
					</BoxCard>
				</BoxColumn>
				<BoxColumn>
					<BoxHeader>
						<h2>Acadêmica</h2>
						<p>2014 · 2022</p>
					</BoxHeader>

					<BoxCard>
						<Card>
							<CardContent>
								<h2>Desenvolvedor Front-end na Ensinio</h2>
								<p>
									Desenvolvimento de features na aplicação principal e site. com
									React Js e Typescript, além do auxíllio de outras tecnologias
									como Next, Styled Components e padrões de arquitetura.
								</p>
							</CardContent>
							<CardFooter>
								<span>1 ano e 7 meses</span>
								<span>Abril/2021 · Atualmente</span>
							</CardFooter>
						</Card>
						<Card>
							<CardContent>
								<h2>Desenvolvedor Front-end na Ensinio</h2>
								<p>
									Desenvolvimento de features na aplicação principal e site. com
									React Js e Typescript, além do auxíllio de outras tecnologias
									como Next, Styled Components e padrões de arquitetura.
								</p>
							</CardContent>
							<CardFooter>
								<span>1 ano e 7 meses</span>
								<span>Abril/2021 · Atualmente</span>
							</CardFooter>
						</Card>
						<Card>
							<CardContent>
								<h2>Desenvolvedor Front-end na Ensinio</h2>
								<p>
									Desenvolvimento de features na aplicação principal e site. com
									React Js e Typescript, além do auxíllio de outras tecnologias
									como Next, Styled Components e padrões de arquitetura.
								</p>
							</CardContent>
							<CardFooter>
								<span>1 ano e 7 meses</span>
								<span>Abril/2021 · Atualmente</span>
							</CardFooter>
						</Card>
					</BoxCard>
				</BoxColumn>
			</Box>
		</TimelineContainer>
	);
}
