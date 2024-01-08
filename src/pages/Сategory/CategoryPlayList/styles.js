import styled, { css, keyframes } from 'styled-components';

export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;
  overflow: hidden;
`;

export const PlayListTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.h1``;

export const TrackTitleImg = styled.div`
  width: 51px;
  height: 51px;
  margin-right: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--track-title-svg-bg);
  cursor: pointer;
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export const Skeleton = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background: var(--title-track-img);
  animation: ${(props) =>
    props.$isLoading
      ? css`
          ${blink} 2s ease-in-out infinite both
        `
      : 'none'};
`;

export const TitleText = styled.div``;

export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`;

export const TrackAlbum = styled.div`
  width: 345px;
`;

export const Time = styled.div``;

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
  color: var(--main-text);
`;

export const TrackStatusIndicator = styled.div`
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: ${(props) =>
    props.active === 'true'
      ? css`
          ${bubbleOut} 0.6s ease-in-out infinite both
        `
      : 'none'};
`;

export const TrackPlayImg = styled.div`
  width: 51px;
  height: 51px;
  background-color: var(--container);
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: image;
`;

export const TrackAuthorLink = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  text-align: left;
  background: transparent;
  border: medium none;
  cursor: pointer;
  &:hover {
    color: #b672ff;
  }
`;

export const TrackAlbumLink = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  background: transparent;
  border: medium none;
`;

export const TrackTitleLink = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  background: transparent;
  border: medium none;
  cursor: pointer;
`;

export const TrackButtonLike = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
  margin-left: 21px;
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

const bubbleOut = keyframes`
  0%, 100% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(1);
  }
`;