import * as S from './styles';

type ContainerTelasMobileProps = {
  children: React.ReactNode;
};

export const ContainerTelasMobile = ({
  children,
}: ContainerTelasMobileProps) => {
  return <S.ContainerTelasMobile>{children}</S.ContainerTelasMobile>;
};
