import styled from 'styled-components';
import { colors, metrics } from '../../theme';

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.primary};
  padding: ${metrics.padding.ml} ${metrics.padding.lg};
  z-index: 1;
`;
