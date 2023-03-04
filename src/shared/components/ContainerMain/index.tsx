import * as S from './styles';
import Forma1 from '../../../assets/background/Forma1.svg';

type ContainerMainProps = {
  children: React.ReactNode;
};

export const ContainerMain = ({ children }: ContainerMainProps) => {
  return (
    <S.ContainerMain>
      <S.TopImage src={Forma1} alt="forma1" />
      <S.Body>{children}</S.Body>
    </S.ContainerMain>
  );
};
