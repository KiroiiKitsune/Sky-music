import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  background: transparent;
  border: medium none;
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  color: var(--main-text);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: rgba(28, 28, 28, 0);
  border: medium none;
`;
