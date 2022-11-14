import { useState } from "react";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);

  async function fetchCategoriesHandler() {
    setisLoading(true);
    try {
      const result = await fetch("https://api.chucknorris.io/jokes/categories");
      const data = await result.json();
      setCategories(data);
    } catch {
      console.log("error");
    }
    setisLoading(false);
  }

  async function fetchJokeHandler({ target }) {
    console.log(target.textContent);
    try {
      const result = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${target.textContent}`
      );
      const data = await result.json();
      setJoke(data.value);
    } catch {
      console.log("error");
    }
  }

  return (
    <>
      <button onClick={fetchCategoriesHandler}>click</button>
      {isLoading && <p>laoding...</p>}
      {categories.length > 0 &&
        categories.map((c, i) => {
          return (
            <button onClick={fetchJokeHandler} key={i}>
              {c}
            </button>
          );
        })}
      {joke && <p>{joke}</p>}
    </>
  );
}
export default App;
