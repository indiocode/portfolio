import type { ReactElement } from 'react';

import {
	CoverImage,
	DownloadIcon,
	GithubIcon,
	LinkedinIcon,
	WhatsappIcon,
} from '~/assets';
import { Tag } from '~/components/Tag';

import {
	BoxDetail,
	BoxIcons,
	BoxResume,
	CoverContainer,
	UploadButton,
	WhatsappButton,
} from './styles';

export function Cover(): ReactElement {
	return (
		<CoverContainer>
			<BoxDetail>
				<Tag>👋 hello!</Tag>
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
			<img
				src={CoverImage}
				alt="Cover Image"
			/>
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
		</CoverContainer>
	);
}
