//! to build a costum hook component we will name it use...
//! this is a geranty to react that you will use the costum hooks only as a valid hooks.
//* the hook can return anything: array,strings etc...
//* we can use state full logic in the hooks we can use other react hooks in and
//* this allows us to share our logic across components

//* we can make the custom hooks dinamics

const useCounter = (num, op) => {
  switch (op) {
    case "+":
      num += 1;
      break;
    case "-":
      num -= 1;
      break;
    case "*":
      num *= 2;
      break;
    case "/":
      num /= 2;
      break;
    default:
      break;
  }
  return { num };
};
export default useCounter;
