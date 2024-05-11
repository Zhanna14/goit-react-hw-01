import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.line}>Type</th>
            <th className={css.line}>Amount</th>
            <th className={css.line}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
              <tr className={css.zebra} key={item.id}>
              <td className={css.column}>{item.type}</td>
              <td className={css.column}>{item.amount}</td>
              <td className={css.column}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
