//! use memo

// to avoid evaluation og components we can wrap the export default og outerHeightfunctions with React.memo()

// that way react will to compare props values and only if theres a in props and evaluate it again
// first it stores the previous values and then make the comperession
// its also cost on performance
// so we need to think about where to use memofor example if we have a huge component tree and a whole branch isnt going to change
// the best teqnich is to select a high key in the tree components
//! we can use it to compare only primitives varaiables !!
//! that means the react memo alone is useless for components who get functions or arrays or any other non-primitives as props

const demo = () => {
  return <OTHERc>{props.name}</OTHERc>;
};
export default React.memo(demo);

// -------- useMmeo  --------

// we will use it to store data which is not functions and objects but primitive
// we wiil use it if we have some data that need to proccess with some high-performance operation like sorting

function App() {
  const listItems = useMemo(() => [1, 3, 9, 6, 8], []);

  return (
    <div>
      <p items={listItems}></p>
    </div>
  );
}

// that way we will garanty that even if the component is re-rendereded that operation/data
//will not be procces too, unless it has been changed (as we specified in the dependency array)
