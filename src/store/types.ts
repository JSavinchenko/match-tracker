export type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished';

export interface TeamProps {
  name: string;
}

export interface MatchProps {
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export interface OkResponse {
  ok: boolean;
  data: {
    matches: MatchProps[];
  };
}

export interface MatchesState {
  matches: MatchProps[] | null;
  error: string | null;
  fetchMatches: (force?: boolean) => Promise<void>;
}
