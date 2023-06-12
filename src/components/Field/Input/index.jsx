import React, { useState } from "react";

// validation
import { useField } from "formik";

// styled
import { Layout, Input, IconContainer, Error, Question } from "./styled";

// image
import {
  ShowIcon,
  HiddenIcon,
  UserIcon,
  MailIcon,
  PassIcon,
} from "assets/icons";

// Component
import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";

const IconList = [UserIcon, MailIcon, PassIcon];

//-------------------------------------------------
const InputField = ({ question, pass, image, authError, ...props }) => {
  const [field, meta] = useField({ ...props, type: "text" });
  const [show, setShow] = useState(true);
  const Icon = IconList[image];

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
      <Flex $style={{ back: "#292929", radius: "12px" }}>
        <IconContainer>
          <Icon
            touched={meta.touched}
            error={!meta.error}
            authError={authError}
          />
        </IconContainer>
        <Flex
          $style={{
            flex: "1",
            fDirection: "column",
            hAlign: "center",
            p: "6px 16px 6px 16px",
          }}
        >
          {meta.value !== "" && (
            <Question
              touched={meta.touched}
              error={!meta.error}
              authError={authError}
            >
              {question}
            </Question>
          )}
          <Input
            {...field}
            {...props}
            type={!pass || !show ? "text" : "password"}
          />
        </Flex>
        {pass ? (
          show ? (
            <IconContainer
              onClick={() => {
                setShow(false);
              }}
            >
              <ShowIcon
                touched={meta.touched}
                error={!meta.error}
                authError={authError}
              />
            </IconContainer>
          ) : (
            <IconContainer
              onClick={() => {
                setShow(true);
              }}
            >
              <HiddenIcon
                touched={meta.touched}
                error={!meta.error}
                authError={authError}
              />
            </IconContainer>
          )
        ) : null}
      </Flex>
    </Layout>
  );
};

export default InputField;
