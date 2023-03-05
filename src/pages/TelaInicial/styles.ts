import { colors } from './../../shared/theme/colors';
import styled from 'styled-components';
import { fonts, metrics } from '../../shared/theme';
import { Text } from '../../shared/components/Text/styles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.secondary};
  height: 100%;
  padding-top: calc(${metrics.padding.xxl} * 4);
`;

export const Logo = styled.img`
  width: 150px;
  padding-bottom: ${metrics.padding.xl};
`;

export const SmallText = styled(Text)`
  margin-top: ${metrics.margin.xl};
  font-size: ${fonts.size.sl};
`;
