function App() {
  const [favoriteColor, setfavoriteColor] = useState("blue");

  useEffect(() => {
    setTimeout(() => {
      setfavoriteColor("pink");
    }, 1000);
  }, [favoriteColor]);
  return (
    <div>
      <h1>my favourite color is {favoriteColor}</h1>
    </div>
  );
}

export default App;
