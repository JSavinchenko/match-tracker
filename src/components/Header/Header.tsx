import {
  StyledBlockLogo,
  StyledBlockUpdate,
  StyledButton,
  StyledButtonText,
  StyledDropdown,
  StyledDropdownArrow,
  StyledDropdownWrapper,
  StyledErrorBlock,
  StyledErrorText,
  StyledHeader,
  StyledLogo,
  StyledOption,
  StyledRefreshIcon,
} from './Header.style';
import triangle from './images/triangle.svg';
import refresh from './images/Refresh.svg';
import arrow from './images/arrow.svg';
import {useCallback, useState} from 'react';
import {getMatchesStore} from '../../store/getMatchesStore';
import {HeaderProps} from './Header.types';
import {STATUS_OPTIONS} from './Header.utils';

export const Header = ({setFilterStatus}: HeaderProps) => {
  const [isRotating, setIsRotating] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value;
    setSelectedStatus(status);
    setFilterStatus(status);
  };

  return (
    <StyledHeader>
      <StyledBlockLogo>
        <StyledLogo>Match Tracker</StyledLogo>
        <StyledDropdownWrapper>
          <StyledDropdown
            value={selectedStatus}
            onChange={handleStatusChange}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            {STATUS_OPTIONS.map((option) => (
              <StyledOption key={option.value} value={option.value}>
                {option.label}
              </StyledOption>
            ))}
          </StyledDropdown>
          <StyledDropdownArrow
            src={arrow}
            alt='arrow'
            isOpen={isDropdownOpen}
          />
        </StyledDropdownWrapper>
      </StyledBlockLogo>
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
