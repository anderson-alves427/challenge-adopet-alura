import styled from 'styled-components';
import { metrics } from '../../theme';

export const ContainerMain = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const TopImage = styled.img`
  position: absolute;
  width: 300px;
  left: 0;
  top: 0;
`;

export const Body = styled.div`
  margin-top: calc(${metrics.margin.xxl} * 4);
  background-color: red;
`;
