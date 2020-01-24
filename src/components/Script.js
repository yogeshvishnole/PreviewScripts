import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const Script = ({ formValue }) => {
  const [values, setValues] = useState([-575, 0]);

  const setFormValues = formValue => {
    if (formValue === "left") setValues([-575, 0]);
    if (formValue === "right") setValues([575, 0]);
    if (formValue === "up") setValues([0, -225]);
    if (formValue === "down") setValues([0, 225]);
  };

  useEffect(() => {
    setFormValues(formValue);
  }, [formValue]);

  const template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.5/gsap.min.js"></script>
      <title>Experiment</title>
      <style>
        #divank {
          width: 95vw;
          height: 95vh;
          background-color: cornflowerblue;
          margin: auto;
        }
  
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      </style>
    </head>
    <body>
      <div class="wrappper" id="divank">
        <img src="./consult.png" alt="main" class="img" />
      </div>
      <script type="text/javascript">
        gsap.to(".img", { x: ${values[0]}, y: ${values[1]}, duration: 3, repeat: -1, yoyo: true });
      </script>
    </body>
  </html>
  
    `;

  return (
    <div className="script-box">
      <a
        onClick={async () => {
          await axios({
            method: "post",
            url: "http://localhost:8000/",
            data: {
              template
            }
          });
        }}
        className="btn"
        href="http://localhost:8000"
        target="_blank"
        rel="noopener noreferrer"
      >
        Preview
      </a>
      <div className="script">
        <p>{template}</p>
      </div>
    </div>
  );
};

export default Script;
