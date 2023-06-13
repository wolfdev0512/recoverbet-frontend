import React from "react";

// styled
import { Layout, Image, Button } from "./styled";

// component
import AuthLayout from "components/Layouts/AuthLayout";
import { P, Span } from "components/Base/Text";

// Image
import LogoImage from "assets/images/logo_2.png";

//-------------------------------------------------------

const Lost = () => {
  return (
    <AuthLayout touched={true} error={false} authError={false}>
      <Layout>
        <Image src={LogoImage} alt="No Logo" />
        <P
          $style={{
            family: "Sora",
            weight: "600",
            size: "48px",
            lH: "125%",
            queries: {
              1024: {
                size: "34px",
              },
              768: {
                w: "90%",
                align: "center",
              },
              425: {
                size: "28px",
              },
            },
          }}
        >
          404: Página não encontrada
        </P>
        <P
          $style={{
            w: "500px",
            weight: "600",
            size: "24px",
            align: "center",
            queries: {
              1024: {
                size: "20px",
                w: "400px",
              },
              768: {
                size: "18px",
                w: "300px",
              },
              425: {
                size: "16px",
              },
            },
          }}
        >
          <Span
            $style={{
              color: "#AF1D1D",
            }}
          >
            Tente novamente
          </Span>{" "}
          daqui alguns minutos ou acesse o Suporte
        </P>
        <Button to="/">
          <P
            $style={{
              weight: "600",
              size: "16px",
              lH: "125%",
              color: "#FFFFFF",
            }}
          >
            VOLTAR
          </P>
        </Button>
      </Layout>
    </AuthLayout>
  );
};

export default Lost;
