import styled from 'styled-components';

export const PlayerProgressInput = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  background-color: var(--bar-player-progress);
  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }

  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }`

export const BarTime = styled.div`
  position: absolute;
  top: -18px;
  width: 100%;
  text-align: right;
  background-color: var(--container);
  padding-right: 20px;
`;
