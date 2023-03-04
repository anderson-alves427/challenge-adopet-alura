import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
};

export const Text = ({ children }: TextProps) => {
  return <S.Text>{children}</S.Text>;
};
