//!  using CSS modules

// we can create classes from our css styles and use it in our components
// when importing the CSS file we import like this:
import styles from "./copy/src/App.css";

// next, we need to make sure our file has different ending:
//* app.module.css
// and then its //!a uniqe stylesheet por this component
// we ca then use these classes like so:
//* <button className={styles.button}/>
//* <div className={styles['form-control']}
