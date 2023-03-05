import { colors } from './../../theme/colors';
import styled from 'styled-components';
import { fonts, metrics } from '../../theme';

export const Button = styled.button`
  background-color: ${colors.coral};
  color: ${colors.cinzaCLaroFundos};
  font-size: ${fonts.size.sl};
  border-radius: 3px;
  padding: ${metrics.padding.xs} 0;
  border: 0;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
`;
