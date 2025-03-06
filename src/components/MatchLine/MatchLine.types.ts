import {Colors} from '../../constants/colors';
import {MatchProps} from '../../store/types';

export interface MatchLineProps {
  match: MatchProps;
}

export interface MatchStatusProps {
  color: Colors;
  status: string;
}
