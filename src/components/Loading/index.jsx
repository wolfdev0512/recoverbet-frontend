import React from "react";

// styled
import { Layout, Effect, Image, Text } from "./styled";

// image
import LogoImage from "assets/images/logo.gif";

//---------------------------------------------------------
const Loading = () => {
  return (
    <Layout>
      <Effect />
      <Image src={LogoImage} alt="no loading.gif" />
      <Text>Carregando...</Text>
    </Layout>
  );
};

export default Loading;
