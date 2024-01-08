import styled from 'styled-components';

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--player-bg);
  transition: background-color 0.5s ease;
  z-index: 1;
`;

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`;
