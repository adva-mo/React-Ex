import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="Quiz">
      <h1 class="QuizTitle">How do you like front end?</h1>
      <form id="Q1" class="form">
        <label id="Q1Title" class="label">
          How much do you love front end?
        </label>
        <input id="Q1Input" type="range" class="range"></input>
      </form>
      <form id="Q1" class="form">
        <label id="Q2Title" class="label">
          what is your favourite front end topic?
        </label>
        <input id="Q2Input" type="text" class="input"></input>
      </form>
    </div>
  );
}

export default App;
