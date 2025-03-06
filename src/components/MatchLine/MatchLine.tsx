import {MatchLineProps} from './MatchLine.types';
import {matchStatusColor} from './MatchLine.utils';
import {
  StyledScore,
  StyledScoreSatus,
  StyledTeam,
  StyledWrapper,
} from './MatshLine.style';
import team from './images/icon.svg';

export const MatchLine = ({match}: MatchLineProps) => {
  const {color, status} = matchStatusColor(match.status);

  return (
    <StyledWrapper>
      <StyledTeam>
        <img src={team} alt='Логотип комманды' />
        <p>{match.awayTeam.name}</p>
      </StyledTeam>
      <StyledScore>
        <p>{`${match.awayScore} : ${match.homeScore}`}</p>
        <StyledScoreSatus color={color}>{status}</StyledScoreSatus>
      </StyledScore>
      <StyledTeam>
        <p>{match.homeTeam.name}</p>
        <img src={team} alt='Логотип команды' />
      </StyledTeam>
    </StyledWrapper>
  );
};
