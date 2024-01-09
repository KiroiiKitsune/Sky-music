import * as S from './styles';

function FilterListGenre() {
  return (
    <S.FilterContentGenre>
      <S.FilterList>
        <S.FilterListGenre>
          <S.FilterListText>
            <S.FilterListMenuLink href='#'>Рок</S.FilterListMenuLink>
          </S.FilterListText>
          <S.FilterListText>
            <S.FilterListMenuLink href='#'>Хип-Хоп</S.FilterListMenuLink>
          </S.FilterListText>
          <S.FilterListText>
            <S.FilterListMenuLink href='#'>Поп-музыка</S.FilterListMenuLink>
          </S.FilterListText>
          <S.FilterListText>
            <S.FilterListMenuLink href='#'>Техно</S.FilterListMenuLink>
          </S.FilterListText>
          <S.FilterListText>
            <S.FilterListMenuLink href='#'>Инди</S.FilterListMenuLink>
          </S.FilterListText>
        </S.FilterListGenre>
      </S.FilterList>
    </S.FilterContentGenre>
  );
}

export default FilterListGenre;
