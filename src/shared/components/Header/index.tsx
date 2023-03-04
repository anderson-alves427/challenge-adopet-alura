import * as S from './styles';
import Logo from '../../../assets/Logo.svg';
import Casa from '../../../assets/header/Casa.svg';
import Mensagens from '../../../assets/header/Mensagens.svg';
import Usuario from '../../../assets/header/usuario.svg';

export const Header = () => {
  return (
    <S.Header>
      <S.ContainerLeft>
        {/* <S.Logo src={Logo} alt="adopet" /> */}
        <S.Icon src={Casa} alt="home" />
        <S.Icon src={Mensagens} alt="contato" />
      </S.ContainerLeft>
      <S.Icon src={Usuario} alt="home" />
    </S.Header>
  );
};
