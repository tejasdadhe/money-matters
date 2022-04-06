import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Form12BB from "../Components/Form12BB";
import { data } from "../Constants/data";

const Form12bbGenerator = () => {
  return (
    <div className="w-100 h-100 d-flex form12bb-wrapper">
      <PDFViewer className="f-1">
        <Form12BB data={data} />
      </PDFViewer>
    </div>
  );
};

export default Form12bbGenerator;
