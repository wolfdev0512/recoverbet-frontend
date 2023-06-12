import React from "react";

// Styled
import { Layout } from "./styled";

import { IoIosArrowDown } from "react-icons/io";

//---------------------------------------------
const RequestItem = (props) => {
  return (
    <Layout>
      <div>{props.text}</div>
      {props.icon ? <IoIosArrowDown /> : null}
    </Layout>
  );
};

export default RequestItem;
