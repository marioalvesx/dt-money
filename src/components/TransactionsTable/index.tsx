import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="title">Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000</td>
            <td>Development</td>
            <td>02/02/2023</td>
          </tr>
          <tr>
            <td>Payment</td>
            <td className="withdraw">-R$12.000</td>
            <td>Development</td>
            <td>02/02/2023</td>
          </tr>
        </tbody>

      </table>
    </Container>
  );
}