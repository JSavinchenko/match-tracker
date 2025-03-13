import {MatchLineProps} from './MatchLine.types';
import {matchStatusColor} from './MatchLine.utils';
import {
  StyledDetailsWrapper,
  StyledIconArrow,
  StyledMatch,
  StyledMatchInfo,
  StyledScore,
  StyledScoreSatus,
  StyledTeam,
  StyledWrapper,
} from './MatchLine.style';
import team from './images/icon.svg';
import arrow from './images/arrow.svg';
import {useState} from 'react';
import {MatchDetails} from '../MatchDetails';

export const MatchLine = ({match}: MatchLineProps) => {
  const {color, status} = matchStatusColor(match.status);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <StyledMatch>
      <StyledWrapper onClick={() => setIsDetailsOpen((prev) => !prev)}>
        <StyledMatchInfo>
          <StyledTeam>
            <img src={team} alt='Логотип команды' />
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
        </StyledMatchInfo>
        <StyledIconArrow
          src={arrow}
          alt='arrow'
          isOpen={isDetailsOpen}
        ></StyledIconArrow>
      </StyledWrapper>
      {isDetailsOpen && (
        <StyledDetailsWrapper>
          <MatchDetails match={match} />
        </StyledDetailsWrapper>
      )}
    </StyledMatch>
  );
};
