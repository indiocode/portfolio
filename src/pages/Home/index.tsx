import type { ReactElement } from 'react';

import { Header } from '~/components/Header';

import { Cover } from './components/Cover';
import { HomeContainer } from './styles';

export function Home(): ReactElement {
	return (
		<HomeContainer>
			<Header />
			<Cover />
		</HomeContainer>
	);
}
