import LogoImg from '../../assets/logo.svg'

import { Container } from './styles'

function Header() {
  return (
    <Container>
      <img src={logoImg} alt="dt money" />
      <button type="button">
       Nova transação
      <button/>
    </Container>
  );
}
