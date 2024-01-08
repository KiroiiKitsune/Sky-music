import * as S from './styles';

function NavBurger({ toggleVisibility, handleKeyDown }) {
  return (
    <S.NavBurger
      onClick={toggleVisibility}
      role='button'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <S.NavLine />
      <S.NavLine />
      <S.NavLine />
    </S.NavBurger>
  );
}

export default NavBurger;
