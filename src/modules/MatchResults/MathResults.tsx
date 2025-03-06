import {v4 as uuidv4} from 'uuid';
import {useEffect, useMemo} from 'react';
import {MatchLine} from '../../components/MatchLine';
import {getMatchesStore} from '../../store/getMatchesStore';
import {StyledContainer} from './MatchResults.style';

export const MatchResults = () => {
  const {matches, fetchMatches} = getMatchesStore();

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const matchList = useMemo(() => {
    return matches?.map((match) => <MatchLine key={uuidv4()} match={match} />);
  }, [matches]);

  return <StyledContainer>{matches && matchList}</StyledContainer>;
};
