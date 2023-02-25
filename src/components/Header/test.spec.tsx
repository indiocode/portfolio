import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Header } from '~/components/Header';

describe('Avatar Component', () => {
	afterEach(cleanup);

	it('must be able to render an avatar with a specific size', () => {
		const { getByRole } = render(<Header />);

		expect(getByRole('navigation')).toBeInTheDocument();

		screen.debug();
	});
});
