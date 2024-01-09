import { useState } from 'react';
import FilterListPerformer from '../filterListPerformer';
import FilterListYear from '../filterListYear';
import FilterListGenre from '../filerListGenre';
import * as S from './styles';

function FilterButton() {
  const [filter, setFilter] = useState(0);
  const toggleFilter = (id) => setFilter(filter === id ? 0 : id);

  const handleKeyDown = (numb) => toggleFilter(numb);

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterBox>
        <S.FilterButtonBlock>
          <S.FilterButton
            onClick={() => toggleFilter(1)}
            tabIndex={0}
            onKeyDown={(event) =>
              handleKeyDown(event.key === 'Enter' ? 1 : null)
            }
            $isActive={filter === 1}
          >
            исполнителю
          </S.FilterButton>
          {filter === 1 ? <FilterListPerformer /> : null}
        </S.FilterButtonBlock>
        <S.FilterButtonBlock>
          <S.FilterButton
            onClick={() => toggleFilter(2)}
            role='button'
            tabIndex={0}
            onKeyDown={(event) =>
              handleKeyDown(event.key === 'Enter' ? 2 : null)
            }
            $isActive={filter === 2}
          >
            году выпуска
          </S.FilterButton>
          {filter === 2 ? <FilterListYear /> : null}
        </S.FilterButtonBlock>
        <S.FilterButtonBlock>
          <S.FilterButton
            onClick={() => toggleFilter(3)}
            role='button'
            tabIndex={0}
            onKeyDown={(event) =>
              handleKeyDown(event.key === 'Enter' ? 3 : null)
            }
            $isActive={filter === 3}
          >
            жанру
          </S.FilterButton>
          {filter === 3 ? <FilterListGenre /> : null}
        </S.FilterButtonBlock>
      </S.FilterBox>
    </S.CenterBlockFilter>
  );
}

export default FilterButton;
