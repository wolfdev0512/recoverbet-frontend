import React, { useState, useEffect } from "react";

// styled
import { Layout } from "./styled";

// components
import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";

// router
import { useLocation } from "react-router-dom";
import useResize from "hook/useResize";

//--------------------------------------------------------
const MenuItem = (props) => {
  const [w,] = useResize();
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const MenuIcon = props.icon;

  const [iconColor, setIconColor] = useState("#C5C5C5");

  useEffect(() => {
    if (w <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [w])

  useEffect(() => {
    if (isMobile && props.mobile) {
      setIconColor((prev) => "#0B0B0B");
      return;
    }
    if (location.pathname === props.to) {
      setIconColor((prev) => (!isMobile ? "#0B0B0B" : "#F6BE76"));
    } else {
      setIconColor((prev) => "#C5C5C5")
    }
  }, [location.pathname, props.to, isMobile, props.mobile]);

  return (
    <Layout to={props.to} active={location.pathname === props.to}>
      <Flex $style={{ vAlign: "center", hAlign: "center", w: "22px", h: "22px", m: "0px 13px 0px 0px" }}>
        <MenuIcon color={iconColor} />
      </Flex>
      {props.tempText === undefined || !isMobile
        ? <P $style={{ size: "20px" }}>{props.text}</P>
        : <P $style={{ size: "20px" }}>{props.tempText}</P>
      }
    </Layout>
  );
};

export default MenuItem;
