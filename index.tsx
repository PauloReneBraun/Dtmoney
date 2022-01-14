import LogoImg from "../../assets/logo.svg";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
