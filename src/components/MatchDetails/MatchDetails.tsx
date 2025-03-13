import {MatchProps} from '../../store/types';
import {
  StyledPlayerKills,
  StyledPlayerName,
  StyledRow,
  StyledDetailsInfo,
  StyledPlayersInfo,
  StyledWrapper,
  StyledTeamStats,
  StyledKills,
  StyledKillsNumber,
  StyledTeamInfo,
  StyledText,
  StyledNumber,
} from './MatchDetails.style';
import avatar from './images/avatar.svg';

export const MatchDetails = ({match}: {match: MatchProps}) => {
  return (
    <StyledWrapper>
      <StyledDetailsInfo>
        <StyledPlayersInfo>
          {match.awayTeam.players.map((player) => (
            <StyledRow key={player.username}>
              <StyledPlayerName>
                <img src={avatar} alt='player`s avatar' />
                {player.username}
              </StyledPlayerName>
              <StyledPlayerKills>
                <StyledKills>Убийств:</StyledKills>
                <StyledKillsNumber>{player.kills}</StyledKillsNumber>
              </StyledPlayerKills>
            </StyledRow>
          ))}
        </StyledPlayersInfo>
        <StyledTeamStats>
          <StyledTeamInfo>
            <StyledText>Points:</StyledText>
            <StyledNumber>+{match.awayTeam.points}</StyledNumber>
          </StyledTeamInfo>
          <StyledTeamInfo>
            <StyledText>Место:</StyledText>
            <StyledNumber>{match.awayTeam.place}</StyledNumber>
          </StyledTeamInfo>
          <StyledTeamInfo>
            <StyledText>Всего убийств:</StyledText>
            <StyledNumber>{match.awayTeam.total_kills}</StyledNumber>
          </StyledTeamInfo>
        </StyledTeamStats>
      </StyledDetailsInfo>

      <StyledDetailsInfo>
        <StyledPlayersInfo>
          {match.homeTeam.players.map((player) => (
            <StyledRow key={player.username}>
              <StyledPlayerName>
                <img src={avatar} alt='player`s avatar' />
                {player.username}
              </StyledPlayerName>
              <StyledPlayerKills>
                <StyledKills>Убийств:</StyledKills>
                <StyledKillsNumber>{player.kills}</StyledKillsNumber>
              </StyledPlayerKills>
            </StyledRow>
          ))}
        </StyledPlayersInfo>
        <StyledTeamStats>
          <StyledTeamInfo>
            <StyledText>Points:</StyledText>
            <StyledNumber>+{match.homeTeam.points}</StyledNumber>
          </StyledTeamInfo>
          <StyledTeamInfo>
            <StyledText>Место:</StyledText>
            <StyledNumber>{match.homeTeam.place}</StyledNumber>
          </StyledTeamInfo>
          <StyledTeamInfo>
            <StyledText>Всего убийств:</StyledText>
            <StyledNumber>{match.homeTeam.total_kills}</StyledNumber>
          </StyledTeamInfo>
        </StyledTeamStats>
      </StyledDetailsInfo>
    </StyledWrapper>
  );
};
