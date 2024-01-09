function Skeleton({ w, h }) {
  const style = {
    width: w,
    height: h,
    background: 'var(--title-track-img)',
  };
  return <div style={style} />;
}

export default Skeleton;
