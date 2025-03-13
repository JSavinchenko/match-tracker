import {v4 as uuidv4} from 'uuid';
import {useEffect, useMemo} from 'react';
import {MatchLine} from '../../components/MatchLine';
import {getMatchesStore} from '../../store/getMatchesStore';
import {StyledContainer} from './MatchResults.style';
import {MatchResultsProps} from './MatchResults.types';

export const MatchResults = ({filterStatus}: MatchResultsProps) => {
  const {matches, fetchMatches} = getMatchesStore();

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const filteredMatches = useMemo(() => {
    if (filterStatus === 'all') return matches;
    return matches?.filter((match) => match.status === filterStatus);
  }, [matches, filterStatus]);

  const matchList = useMemo(() => {
    return filteredMatches?.map((match) => (
      <MatchLine key={uuidv4()} match={match} />
    ));
  }, [filteredMatches]);

  return (
    <StyledContainer>
      {matchList?.length ? matchList : <p>Нет матчей</p>}
    </StyledContainer>
  );
};
