import React, { useState, useEffect } from "react";

// styled
import { Layout } from "./styled";

// components
import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";

// router
import { useLocation } from "react-router-dom";

//--------------------------------------------------------
const MenuItem = (props) => {
  const location = useLocation();

  const MenuIcon = props.icon;

  const [iconColor, setIconColor] = useState("#C5C5C5");

  useEffect(() => {
    if (location.pathname === props.to) {
      setIconColor("#0B0B0B");
    }
  }, [location.pathname, props.to]);

  return (
    <Layout to={props.to} active={location.pathname === props.to}>
      <Flex $style={{ w: "22px", h: "22px", m: "0px 13px 0px 0px" }}>
        <MenuIcon color={iconColor} />
      </Flex>
      <P $style={{ size: "20px" }}>{props.text}</P>
    </Layout>
  );
};

export default MenuItem;
