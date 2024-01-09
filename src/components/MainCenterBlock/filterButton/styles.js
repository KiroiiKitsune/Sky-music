import styled, { css } from 'styled-components';

export const CenterBlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 18px;
`;

export const FilterButtonBlock = styled.div`
  position: relative;
`;

export const FilterButton = styled.div`
  background-color: var(--container);
  transition: background-color 0.5s ease;
  border: 1px solid ${(props) => (props.$isActive ? '#ad61ff' : 'var(--main-text)')};
  color: ${(props) => (props.$isActive ? '#ad61ff' : 'var(--main-text)')};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  border-radius: 60px;
  padding: 6px 20px;
  width: 144px;
  cursor: pointer;
  &:hover {
    border-color: var(--btn-border-text-hover);
    color: var(--btn-border-text-hover);
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
  }
`;