import type { ReactElement } from 'react';

import {
	CssIcon,
	DockerIcon,
	FigmaIcon,
	GithubLargeIcon,
	GitIcon,
	HtmlIcon,
	InsomniaIcon,
	JavascriptIcon,
	MongoIcon,
	MysqlIcon,
	NodeIcon,
	PostgresIcon,
	ReactIcon,
	TypescriptIcon,
} from '~/assets';
import { Tag } from '~/components/Tag';

import { Box, BoxList, BoxSkills, SkillsContainer } from './styles';

export function Skills(): ReactElement {
	return (
		<SkillsContainer>
			<Tag variant="primary">🧑‍💻 Skills · Experiências</Tag>
			<h1>Tecnologias e habilidades</h1>

			<BoxSkills>
				<Box>
					<span>Techs que uso no dia a dia</span>
					<BoxList>
						<img
							src={ReactIcon}
							alt="React Icon"
						/>

						<img
							src={JavascriptIcon}
							alt="Javascript Icon"
						/>

						<img
							src={TypescriptIcon}
							alt="Typescript Icon"
						/>

						<img
							src={FigmaIcon}
							alt="Figma Icon"
						/>

						<img
							src={GithubLargeIcon}
							alt="Github Icon"
						/>

						<img
							src={GitIcon}
							alt="Git Icon"
						/>

						<img
							src={InsomniaIcon}
							alt="Insomnia Icon"
						/>
					</BoxList>
				</Box>

				<Box>
					<span>Outras techs com que já realizei projetos</span>
					<BoxList>
						<img
							src={NodeIcon}
							alt="Node Icon"
						/>

						<img
							src={PostgresIcon}
							alt="Postgres Icon"
						/>

						<img
							src={MysqlIcon}
							alt="Mysql Icon"
						/>

						<img
							src={MongoIcon}
							alt="Mongo Icon"
						/>

						<img
							src={DockerIcon}
							alt="Docker Icon"
						/>

						<img
							src={CssIcon}
							alt="CSS Icon"
						/>

						<img
							src={HtmlIcon}
							alt="HTML Icon"
						/>
					</BoxList>
				</Box>
			</BoxSkills>
		</SkillsContainer>
	);
}
