import Counter from './companents/result.js';
import useStyles from "../src/companents/resultstyles.js";


function App() {

    const style = useStyles();
  return (
  <div className={style.app}>
    <Counter/>
  </div>
  );
}

export default App;
