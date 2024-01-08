import styled from 'styled-components';

export const PlayerTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
  column-gap: 12px;
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

export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  white-space: nowrap;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: var(--main-text);
  white-space: nowrap;
`;
