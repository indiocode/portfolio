import type { ReactElement } from 'react';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Cover } from './components/Cover';
import { Intents } from './components/Intents';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { HomeContainer } from './styles';

export function Home(): ReactElement {
	return (
		<HomeContainer>
			<Header />
			<Cover />
			<Intents />
			<About />
			<Skills />
			<Timeline />
			<Contact />
			<Footer />
		</HomeContainer>
	);
}
