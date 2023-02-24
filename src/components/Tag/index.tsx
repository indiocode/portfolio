import type { HTMLAttributes, ReactElement, ReactNode } from 'react';

import { TagContainer } from './styles';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
}

export function Tag({ children }: TagProps): ReactElement {
	return <TagContainer>{children}</TagContainer>;
}
