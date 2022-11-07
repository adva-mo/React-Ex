//? KEYS

//when we setState to dinamacillay render the elements using  an array for example,
//react will notice the length of the array has chanded therefor react will first add an elemnt to the tree, then visit
// each elemnt and render it again in the correct order. this is slow and may occoures bugs (if the state changes in one elemnt it can be ovveride other)
//the soultuon to this is to add key for each component on rendering.
//* using the index arameter of the map function isnt recomended because its attached to the index place and not the item itself
const expenses = [
  //dummy data
  {},
  {},
];
const someComponent = () => {
  return (
    <div>
      <Card>
        {expenses.map((espense) => {
          <ExpenseItem>
            key={espense.id}
            title = {espense.title}
            amount = {espense.amount}
            date = {espense.date}
          </ExpenseItem>;
        })}
      </Card>
    </div>
  );
};
