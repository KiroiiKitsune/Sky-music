import SidebarPersonal from './sidebarPersonal/sidebarPersonal';
import SidebarBlock from './sidebarBlock/sidebarBlock';
import * as S from './styles';

function MainSidebar({ loading }) {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarBlock loading={loading} />
    </S.MainSidebar>
  );
}

export default MainSidebar;
