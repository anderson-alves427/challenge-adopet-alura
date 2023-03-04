import styled from 'styled-components';
import { metrics } from '../../theme';

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: ${metrics.padding.md} ${metrics.padding.sm};
  display: flex;
  justify-content: space-between;
  background-color: gray;
  align-items: center;
`;

export const ContainerLeft = styled.aside`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 75px;
`;

export const Icon = styled.img`
  width: 25px;
  margin-left: ${metrics.margin.lg};
`;
