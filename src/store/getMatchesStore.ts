import {create} from 'zustand';
import {fetchMatches} from '../api/api';
import {MatchesState, MatchProps} from './types';

export const getMatchesStore = create<MatchesState>(
  (
    set: (arg0: {
      loading: boolean;
      error?: string | null;
      matches?: MatchProps[];
    }) => void,
  ) => ({
    matches: null,
    loading: false,
    error: null,
    fetchMatches: async () => {
      set({loading: true, error: null});
      try {
        const data = await fetchMatches();
        set({matches: data, loading: false});
      } catch (error) {
        console.error(error);
      }
    },
  }),
);
