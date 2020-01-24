import React from "react";

import { useState } from "react";

import Script from "./Script";
import Form from "./Form";

const App = () => {
  const [formValue, setFormValue] = useState("left");

  return (
    <div>
      <Form
        onFormValueUpdated={value => {
          setFormValue(value);
        }}
      />

      <Script formValue={formValue} />
    </div>
  );
};

export default App;
