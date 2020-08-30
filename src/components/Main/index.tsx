import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />
    <S.Title>React avançado</S.Title>
    <S.Description>Typescript, React, Next e Styled components.</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com um código"
    />
  </S.Wrapper>
)

export default Main
