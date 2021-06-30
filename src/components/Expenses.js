import ExpenseItem from "./ExpenseItem";

function Expenses(props) {

//   let fullItems = props.items.map(function (i) {
//     <ExpenseItem
//       title={i.title}
//       date={i.date}
//       amount={i.amount}
//     />;
//   });

  return <>
      <ExpenseItem
      title={props.items[0].title}
      date={props.items[0].date}
      amount={props.items[0].amount}
    />;
    <ExpenseItem
      title={props.items[1].title}
      date={props.items[1].date}
      amount={props.items[1].amount}
    />;
    <ExpenseItem
      title={props.items[2].title}
      date={props.items[2].date}
      amount={props.items[2].amount}
    />;
    <ExpenseItem
      title={props.items[3].title}
      date={props.items[3].date}
      amount={props.items[3].amount}
    />;

  </>;
}

export default Expenses;
