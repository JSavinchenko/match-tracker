import styled from 'styled-components';
import {Colors} from '../../constants/colors';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  gap: 32px;
  background-color: ${Colors.COMMAND_LINE};
  padding: 16px;
`;

export const StyledDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const StyledPlayersInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-block: 8px;
  padding-inline: 24px;
  background-color: ${Colors.MATCH_DETAILS};
  border-radius: 4px;
`;

export const StyledPlayerName = styled.span`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
`;

export const StyledPlayerKills = styled.span`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const StyledKills = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: right;
  opacity: 0.6;
`;

export const StyledKillsNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: right;
`;

export const StyledTeamStats = styled.div`
  background-color: ${Colors.MATCH_DETAILS};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-block: 14px;
  padding-inline: 24px;
  border-radius: 4px;
`;

export const StyledTeamInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: right;
  opacity: 0.6;
`;

export const StyledNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: right;
`;
