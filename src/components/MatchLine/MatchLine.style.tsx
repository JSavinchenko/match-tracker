import styled from 'styled-components';
import {Colors} from '../../constants/colors';

export const StyledMatch = styled.div`
  background-color: ${Colors.COMMAND_LINE};
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 4px;
`;

export const StyledWrapper = styled.div`
  background-color: ${Colors.COMMAND_LINE};
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StyledMatchInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTeam = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const StyledScore = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const StyledScoreSatus = styled.div<{color: Colors}>`
  background-color: ${({color}) => color};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  width: 112px;
  border-radius: 4px;
  padding-block: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIconArrow = styled.img<{isOpen: boolean}>`
  pointer-events: none;
  transition: transform 0.3s ease;
  transform: ${({isOpen}) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const StyledDetailsWrapper = styled.div`
  width: 100%;
`;
