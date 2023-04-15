import PropTypes from "prop-types"
import { Td, Th, Thead, Tr, TransactionTable } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return <TransactionTable>
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

     <tbody>
  {items.map(({ id, type, amount, currency }) => {
 return (
    <Tr key={id}>
      <Td style={{ textTransform: 'capitalize',color: '#818181'}}>{type}</Td>
      <Td style={{color: '#818181'}}>{amount}</Td>
      <Td style={{color: '#818181'}}>{currency}</Td>
     </Tr>
 )
 })}
  </tbody>
</TransactionTable>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}