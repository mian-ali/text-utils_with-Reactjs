import React ,{useState} from "react";
import { Fragment } from "react/cjs/react.production.min";

function DarkMode() {
  const [styleSheet, setStyleSheet] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode")

  const handleDarkClick = () => {
    // console.log("Clicked");
    if (styleSheet.color === "black") {
      setStyleSheet({
        color: "white",
        backgroundColor: "black",
        border:"1px solid white"
      });

      setbtnText("Enable Light Mode")

    }else{
        setStyleSheet({
            color: "black",
            backgroundColor: "white",
          }); 

          setbtnText("Enable Dark Mode")
    }
  };

  return (
    <Fragment>
      <div className="container" style={styleSheet}>
        <h1>Hello From Dark Mood</h1>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" style={styleSheet}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={styleSheet}>
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={styleSheet}>
            <h2 className="accordion-header" id="headingTwo">
              <button style={styleSheet}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div >
          <div className="accordion-item" style={styleSheet}>
            <h2 className="accordion-header" id="headingThree">
              <button style={styleSheet}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div className="container">
            <button
              type="button"
              className="btn btn-primary my-3"
              onClick={handleDarkClick}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DarkMode;
