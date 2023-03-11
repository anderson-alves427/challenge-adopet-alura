import { colors } from './../../shared/theme/colors';
import styled from 'styled-components';
import { fonts, metrics } from '../../shared/theme';
import { Text } from '../../shared/components/Text/styles';
import { Button } from '../../shared/components/Button/styles';
import { ContainerTelasMobile } from '../../shared/components/ContainerTelasMobile/styles';

export const Container = styled(ContainerTelasMobile)`
  background-color: ${colors.secondary};
`;

export const Box = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  padding-bottom: ${metrics.padding.xl};
`;

export const SmallText = styled(Text)`
  margin: ${metrics.margin.xl} 0;
  font-size: ${fonts.size.sl};
`;

export const ButtonTelaInicial = styled(Button)`
  width: 100%;
  margin-bottom: ${metrics.margin.sm};
`;

export const IlustracaoBarraLateralImg = styled.img`
  height: 350px;
  position: absolute;
  right: 0;
`;

export const IlustracaoImg = styled.img`
  position: absolute;
  bottom: -${metrics.padding.md};
  width: 200px;
`;
