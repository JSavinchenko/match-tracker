import {Colors} from '../../constants/colors';
import {MatchStatusProps} from './MatchDetails.types';

export const matchStatusColor = (status: string): MatchStatusProps => {
  switch (status) {
    case 'Finished':
      return {color: Colors.RED_MAIN, status: 'Finished'};
    case 'Ongoing':
      return {color: Colors.LIVE, status: 'Live'};
    case 'Scheduled':
      return {color: Colors.MATCH_PREPARING, status: 'Match preparing'};
    default:
      return {color: Colors.RED_UPDATE_DARK, status: '?'};
  }
};
