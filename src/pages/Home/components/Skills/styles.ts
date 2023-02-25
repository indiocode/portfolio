import styled from 'styled-components';

export const SkillsContainer = styled.section`
	flex: 1;
	margin: 0 auto;
	max-width: 103.75rem;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		padding-top: 1.5rem;
		padding-bottom: 8rem;
		font-weight: 800;
		font-size: 3rem;
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	gap: 2.5rem;

	span {
		font-weight: 400;
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.5);
	}
`;

export const BoxList = styled.div`
	display: flex;
	gap: 2rem;
`;

export const BoxSkills = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
`;
