/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

import { defaultTheme } from '~/styles/themes/default';

export const TAG_TYPES = {
	primary: defaultTheme['blue-01'],
	secondary: defaultTheme['green-02'],
} as const;

interface TagProps {
	variant: keyof typeof TAG_TYPES;
}

export const TagContainer = styled.span<TagProps>`
	padding: 0.75rem 1rem;
	background: ${({ theme }) => theme['dark-light']};
	border-radius: 16px;
	color: ${({ variant }) => TAG_TYPES[variant]};
`;
