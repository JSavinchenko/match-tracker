import {
  StyledBlockUpdate,
  StyledButton,
  StyledButtonText,
  StyledErrorBlock,
  StyledErrorText,
  StyledHeader,
  StyledLogo,
  StyledRefreshIcon,
} from './Header.style';
import triangle from './images/triangle.svg';
import refresh from './images/Refresh.svg';
import {useCallback, useState} from 'react';
import {getMatchesStore} from '../../store/getMatchesStore';

export const Header = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const {error, fetchMatches} = getMatchesStore();

  const onRefreshClick = () => {
    setIsRotating(true);
    setIsDisabled(true);
    handleRefresh();

    setTimeout(() => {
      setIsRotating(false);
      setIsDisabled(false);
    }, 1000);
  };

  const handleRefresh = useCallback(() => {
    fetchMatches(true);
  }, [fetchMatches]);

  return (
    <StyledHeader>
      <StyledLogo>Match Tracker</StyledLogo>
      <StyledBlockUpdate>
        {error && (
          <StyledErrorBlock>
            <img src={triangle} alt='Знак предупреждения об ошибке' />
            <StyledErrorText>
              Ошибка: не удалось загрузить информацию
            </StyledErrorText>
          </StyledErrorBlock>
        )}
        <StyledButton onClick={onRefreshClick} disabled={isDisabled}>
          <StyledButtonText>Обновить</StyledButtonText>
          <StyledRefreshIcon
            isRotating={isRotating}
            src={refresh}
            alt='Анимация обновления'
          />
        </StyledButton>
      </StyledBlockUpdate>
    </StyledHeader>
  );
};
