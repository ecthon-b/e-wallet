import { BiEdit, BiTrash } from "react-icons/bi";
import { Container } from "./styles";


export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aluguel do AP</td>
                        <td className="withdraw">- R$ 700,00</td>
                        <td>Casa</td>
                        <td>21/02/2021</td>
                        <td><BiEdit /></td>
                        <td><BiTrash /></td>
                    </tr>
                    <tr>
                        <td>Freela DriveOn</td>
                        <td className="deposit">R$ 1.500,00</td>
                        <td>PJ</td>
                        <td>21/02/2021</td>
                        <td><BiEdit /></td>
                        <td><BiTrash /></td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}