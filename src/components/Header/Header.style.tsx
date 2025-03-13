import styled, {keyframes, css} from 'styled-components';
import {Colors} from '../../constants/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block: 53px 33px;
  padding-inline: 42px;
`;

export const StyledBlockLogo = styled.span`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.span`
  font-family: Tactic Sans;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-wrap: nowrap;

  @media (max-width: 1040px) {
    font-size: 24px;
  }
`;

export const StyledDropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledDropdown = styled.select`
  max-width: 200px;
  appearance: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  padding: 16px;
  padding-right: 40px;
  border-radius: 4px;
  background-color: ${Colors.COMMAND_LINE};
  color: ${Colors.DROPDOWN_TEXT};
  cursor: pointer;
  margin-left: 16px;

  &:focus {
    outline: none;
  }
`;

export const StyledOption = styled.option`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  color: ${Colors.DROPDOWN_TEXT};
`;

export const StyledDropdownArrow = styled.img<{isOpen: boolean}>`
  position: absolute;
  right: 16px;
  pointer-events: none;
  transition: transform 0.3s ease;
  transform: ${({isOpen}) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const StyledBlockUpdate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StyledErrorBlock = styled.div`
  background-color: ${Colors.ERROR_BACKGROUND};
  border-radius: 4px;
  width: 480px;
  padding-block: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1040px) {
    width: 300px;
    padding-inline: 10px;
  }
`;

export const StyledErrorText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${Colors.RED_MAIN};
  max-width: 204px;
  width: 100%;
  padding-block: 17px;
  padding-inline: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  &:active {
    background-color: ${Colors.RED_UPDATE};
  }

  &:disabled {
    background-color: ${Colors.RED_UPDATE_DARK};
    color: ${Colors.TEXT_DARK};
  }

  @media (max-width: 1040px) {
    max-width: 150px;
    padding-block: 8px;
    flex-direction: column;
  }
`;

export const StyledButtonText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

export const StyledRefreshIcon = styled.img<{isRotating: boolean}>`
  width: 24px;
  height: 24px;
  ${({isRotating}) =>
    isRotating &&
    css`
      animation: ${rotate} 1s linear infinite;
    `}
`;
