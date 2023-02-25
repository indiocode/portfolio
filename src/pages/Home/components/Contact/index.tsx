import type { ReactElement } from 'react';

import { ArrowIcon, CopyIcon, SendIcon, WhatsappIcon } from '~/assets';
import { Tag } from '~/components/Tag';

import {
	Box,
	BoxContact,
	ContactContainer,
	ContactContent,
	GoTop,
	WhatsappButton,
} from './styles';

export function Contact(): ReactElement {
	return (
		<ContactContainer>
			<Tag variant="primary">📬 Contatos</Tag>
			<h1>Vamos conversar!</h1>

			<Box>
				<WhatsappButton href="#">
					<img
						src={WhatsappIcon}
						alt="Wathsapp Icon"
					/>
					Vamos conversar
				</WhatsappButton>
				<BoxContact>
					<img
						src={SendIcon}
						alt="Send Icon"
					/>

					<ContactContent>
						<p>E-mail: </p>
						<p>jhollyfer.fr@gmail.com </p>
					</ContactContent>

					<img
						src={CopyIcon}
						alt="Copy Icon"
					/>
				</BoxContact>
			</Box>

			<GoTop href="#">
				Voltar ao topo
				<img
					src={ArrowIcon}
					alt="Arrow Icon"
				/>
			</GoTop>
		</ContactContainer>
	);
}
