import type { ReactElement } from 'react';

import { About } from './components/About';
import { Cover } from './components/Cover';
import { HomeContainer } from './styles';

export function Home(): ReactElement {
	return (
		<HomeContainer>
			<Cover />
			<About />
		</HomeContainer>
	);
}
