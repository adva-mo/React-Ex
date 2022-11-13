function Spinner() {
  return <div className="spinner"></div>;
}

function App() {
  const [isTimer, setisTimer] = useState(true);
  useEffect(() => {
    const myTimer = setTimeout(() => {
      setisTimer(false);
    }, 5000);
    // return () => {
    // };
  }, []);

  return <>{isTimer && <Spinner />}</>;
}

export default App;
