import * as S from './styles';

function SidebarItem({ select, playList }) {
  return (
    <S.SidebarItem>
      <S.SidebarLink to={`/category/${select}`}>
        <S.SidebarImg src={playList} alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}

export default SidebarItem;
