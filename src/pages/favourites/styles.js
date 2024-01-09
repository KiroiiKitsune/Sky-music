import styled from 'styled-components';

export const LovelyTracks = styled.div`
font-size: 24px
color: var(--main-text);
background-color: var(--container);
display: flex;
justify-content: center;
align-items: center;
height: 100vh`;

// import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
  transition: background-color 0.5s ease;
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: var(--container);
  transition: background-color 0.5s ease;
`;

//

export const FavouriteBlock = styled.div`
  display: flex;
`;

export const FavouritePlayList = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: var(--main-text);
  transition: color 0.5s ease;
`;

export const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const Lay = styled.div`
  background-color: var(--container);
`;

export const ComponentHeader = styled.h2`
font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
}`;
