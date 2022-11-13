//! debounce-
//? refers to a situation where for example we are listening to every key stroke of the user but we want to validate the data the user input after hes done typing, which means after time count ends since user done typing.
// in this situation we will use a timer which will start over and over again after key stroke, because every stroke will initialize the timer, but on the last stroke, the timer will eventually ends, and the callback funtion will be executed,
// then we will execute the function which validates the data.
// we wiil do it by using side--effect-return function!!! which will runs each time before the useeffect function will run, and before the components is removed from the dom exept for the first time!
// this function called "clean-up" function
import { useEffect } from "react";

useEffect(() => {
  const timer = setTimeout(() => {
    setFormIsValid(
      enterdeEmail.includes("@") && enetredPassword.trim().length > 6
    );
    return () => {
      clearTimeout(timer);
    };
  }, 500);
}, [dependencies]);
