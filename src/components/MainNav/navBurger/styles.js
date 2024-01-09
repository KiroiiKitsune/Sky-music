import styled from 'styled-components';

export const NavBurger = styled.div`
width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`

export const NavLine = styled.span`
display: inline-block;
    width: 100%;
    height: 1px;
    background-color: var(--burger-line);
`