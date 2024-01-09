import styled, { css } from 'styled-components';

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FilterListMixin = css`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  overflow-x: hidden;
  scrollbar-color: var(--scroll-thumb) var(--scrollbar);
  a {
    color: var(--main-text);
    transition: color 0.3s ease;
  }
  a:active,
  a:hover {
    color: #b672ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--scrollbar);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-thumb);
    border-radius: 2px;
    border: 2px solid var(--scroll-thumb);
  }
`;

export const FilterListYear = styled.ul`
  ${FilterListMixin};
  width: 116px;
  height: 237px;
  align-items: center;
`;

export const FilterListText = styled.li``;

export const FilterListMenuLink = styled.a``;

const FilterContentMixin = css`
  position: absolute;
  top: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  transition: 1s ease max-height;
  background: var(--title-track-img);
  z-index: 1;
  padding-top: 34px;
  padding-bottom: 34px;
  box-sizing: border-box;
`;

export const FilterContentYear = styled.div`
  max-height: 305px;
  // max-height: ${({ $isGenreMenuOpen }) =>
    $isGenreMenuOpen ? '305px' : '0'};
  width: 144px;
  ${FilterContentMixin};
`;
