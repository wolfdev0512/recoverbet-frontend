import React from "react";

// validation
import { useField } from "formik";

// styled
import { Layout, Input, Error } from "./styled";

// Component
import Flex from "components/Base/Flex";
import { P, Span } from "components/Base/Text";

//-------------------------------------------------
const CheckBoxField = ({ text, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <Layout>
      <Error show={meta.error && meta.touched}>
        <P
          $style={{
            color: "#FB1C1C",
            family: "sora",
            size: "14px",
            weight: "600",
            lH: "125%",
          }}
        >
          {meta.error}
        </P>
      </Error>
      <Flex $style={{ vAlign: "center" }}>
        <Input {...field} {...props} type="checkbox" />
        <Span $style={{ color: "#9B9B9B" }}>{text}</Span>
      </Flex>
    </Layout>
  );
};

export default CheckBoxField;
