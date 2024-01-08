import { useState } from 'react';
import NavLogo from './navLogo/navLogo';
import NavMenu from './navMenu/navMenu';
import NavBurger from './navBurger/navBurger';
import * as S from './styles';

function MainNav() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleVisibility();
    }
  };

  return (
    <S.MainNav>
      <NavLogo />
      <NavBurger
        toggleVisibility={toggleVisibility}
        handleKeyDown={handleKeyDown}
      />
      {visible && <NavMenu />}
    </S.MainNav>
  );
}

export default MainNav;
