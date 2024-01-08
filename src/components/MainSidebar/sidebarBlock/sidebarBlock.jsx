import Skeleton from '../../Skeleton';
import playListOne from '../../../img/playlist01.png';
import playListTwo from '../../../img/playlist02.png';
import playListThree from '../../../img/playlist03.png';
import SidebarItem from '../sidebarItem/sidebarItem';
import * as S from './styles';

function SidebarBlock({ loading }) {
  return (
    <S.SidebarBlock>
      {loading ? (
        <S.SidebarList>
          <Skeleton w='250px' h='150px' />
          <Skeleton w='250px' h='150px' />
          <Skeleton w='250px' h='150px' />
        </S.SidebarList>
      ) : (
        <S.SidebarList>
          <SidebarItem select='1' playList={playListOne} />
          <SidebarItem select='2' playList={playListTwo} />
          <SidebarItem select='3' playList={playListThree} />
        </S.SidebarList>
      )}
    </S.SidebarBlock>
  );
}

export default SidebarBlock;
