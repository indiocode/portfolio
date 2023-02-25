import type { HTMLAttributes, ReactElement, ReactNode } from 'react';

import type { TAG_TYPES } from './styles';
import { TagContainer } from './styles';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
	variant: keyof typeof TAG_TYPES;
}

export function Tag({ children, variant }: TagProps): ReactElement {
	return <TagContainer variant={variant}>{children}</TagContainer>;
}
