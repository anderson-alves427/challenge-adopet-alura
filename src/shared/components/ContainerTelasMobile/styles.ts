import { colors } from './../../theme/colors';
import styled from 'styled-components';
import { metrics } from '../../theme';

export const ContainerTelasMobile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundPadrao};
  height: 100%;
  padding-top: calc(${metrics.padding.xxl} * 4);
`;
