import { Text } from '../../shared/components/Text';
import * as S from './styles';
import Logo from '../../assets/Logo.svg';

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
    </S.Container>
  );
};
