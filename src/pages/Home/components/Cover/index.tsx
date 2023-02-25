import type { ReactElement } from 'react';

import {
	CoverImage,
	CoverToogle,
	DownloadIcon,
	GithubIcon,
	LinkedinIcon,
	WhatsappIcon,
} from '~/assets';
import { Tag } from '~/components/Tag';

import {
	BoxDetail,
	BoxIcons,
	BoxImage,
	BoxMain,
	BoxResume,
	BoxToggle,
	CoverContainer,
	UploadButton,
	WhatsappButton,
} from './styles';

export function Cover(): ReactElement {
	return (
		<CoverContainer>
			<BoxMain>
				<BoxDetail>
					<Tag variant="secondary">👋 hello!</Tag>
					<div>
						<h1>Jhollyfer</h1>
						<h1>Rodrigues</h1>
					</div>
					<p>Front-end & Back-end developer</p>
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
				</BoxDetail>

				<BoxImage>
					<img
						src={CoverImage}
						alt="Cover Image"
					/>
				</BoxImage>
				<BoxResume>
					<UploadButton>
						<input
							type="file"
							id="download-resume"
							hidden
						/>
						<label htmlFor="download-resume">
							Baixar CV
							<img
								src={DownloadIcon}
								alt="Download Icon"
							/>
						</label>
					</UploadButton>
					<WhatsappButton href="#">
						<img
							src={WhatsappIcon}
							alt="Wathsapp Icon"
						/>
						Vamos conversar
					</WhatsappButton>
				</BoxResume>
			</BoxMain>

			<BoxToggle>
				<img
					src={CoverToogle}
					alt="Cover Toggle"
				/>
			</BoxToggle>
		</CoverContainer>
	);
}
