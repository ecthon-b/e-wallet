import { Container, Content } from "./styles";
import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="e-wallet" />
                <div>
                    <a>Saldo inícial</a>
                    <button type="button">
                        Nova transação
                    </button>
                </div>
            </Content>
        </Container>
    )
}