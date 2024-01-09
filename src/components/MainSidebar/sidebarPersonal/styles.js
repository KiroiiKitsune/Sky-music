import styled from 'styled-components';

export const SidebarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;
export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  margin-right: 16px;
`;

export const SidebarButton = styled.button`
  background-color: rgba(28, 28, 28, 0);
  border: none;
`;
