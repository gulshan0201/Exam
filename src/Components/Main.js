import Cross from "./Images/multiply.png";
import Button from "./Button";
import Bars from "./Bars";

function Main() {

  return (
    <>
      <main className="box">
        <header>
          <h3>Strength Bar</h3>
          <div>
            <img src={Cross} alt="cross" />
          </div>
        </header>

        <div className="content">
          <p>Introducing strength bar to help you know your week subject</p>
        </div>

        <div className="graph">
          <span>
            <p>Weak</p>
            <Bars />

          </span>

          <span>
            <p >Average</p>
            <Bars />
          </span>
        </div>

        <div className="graph">
          <span>
            <p >Improvement</p>
            <Bars />
          </span>

          <span>
            <p>Cutoff level</p>
            <Bars />
          </span>
        </div>

        <footer>
          <Button name="Finish" />
        </footer>
      </main>
    </>
  );
}

export default Main;
