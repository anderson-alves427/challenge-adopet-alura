import { Text } from '../../shared/components/Text';
import * as S from './styles';
import Logo from '../../assets/Logo.svg';
import IlustracaoImagem from '../../assets/background/ilustracao.svg';
import IlustracaoBarraLateralImg from '../../assets/background/ilustracaoBarraLateral.svg';

export const TelaInicial = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Logo src={Logo} alt="Logo" />
        <Text>Boas-vindas!</Text>
        <S.SmallText>
          Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
          Vem com a gente!
        </S.SmallText>
        <S.ButtonTelaInicial>Já tenho conta</S.ButtonTelaInicial>
        <S.ButtonTelaInicial>Quero me cadastrar</S.ButtonTelaInicial>
      </S.Box>
      <S.IlustracaoBarraLateralImg
        src={IlustracaoBarraLateralImg}
        alt="Ilustracao barra lateral"
      />
      <S.IlustracaoImg src={IlustracaoImagem} alt="Ilustracao imagem" />
    </S.Container>
  );
};
