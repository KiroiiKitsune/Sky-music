import styled from 'styled-components';

export const TrackPlayLikesDisplay = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`;

const BtnIconMixin = `css
cursor: pointer;
&:hover svg {
    fill: transparent;
    stroke: #acacac;
    }
&:active svg {
    fill: #696969;
    stroke: #fff;
    }
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
  cursor: pointer;
  ${BtnIconMixin}
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
  margin-left: 28.5px;
`;
