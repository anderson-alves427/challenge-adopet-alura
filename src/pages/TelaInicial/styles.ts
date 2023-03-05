import { colors } from './../../shared/theme/colors';
import styled from 'styled-components';
import { metrics } from '../../shared/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  height: 100%;
  overflow-y: scroll;
  padding-top: calc(${metrics.padding.xxl} * 4);
`;

export const Logo = styled.img`
  margin: auto;
  width: 150px;
`;
