import React, { useState } from "react";

// Layout
import DashLayout from "components/Layouts/DashLayout";

// component
import { P } from "components/Base/Text";
import Flex from "components/Base/Flex";

import { RequestItem } from "components/Item";

// styled
import { Container, Button } from "./styled";

// Image
import { SecurityIcon } from "assets/icons";

//------------------------------------------------------
const Panel = () => {
  const [active, setActive] = useState(false);

  return (
    <DashLayout>
      <Container>
        <Flex $style={{ gap: "29px", w: "1050px", fDirection: "column" }}>
          <P
            $style={{
              size: "28px",
              lH: "150%",
              weight: "700",
              color: "#F6BE76",
            }}
          >
            Preencha as informações solicitadas abaixo para consultar os valores
            disponíveis para saque referente as suas perdas..
          </P>
          <RequestItem
            text="Selecione a plataforma para realizar a consulta de valores perdidos:"
            icon={true}
          />
          <RequestItem
            text="Selecione a plataforma para realizar a consulta de valores perdidos:"
            icon={false}
          />
          <RequestItem
            text="Selecione a plataforma para realizar a consulta de valores perdidos:"
            icon={true}
          />
          <Flex $style={{ vAlign: "center" }}>
            <SecurityIcon />
            <P
              $style={{ size: "18px", color: "#9B9B9B", m: "0px 0px 0px 12px" }}
            >
              Nós protegemos seus dados, utilizaremos essas informações apenas
              para poder consultar o valor disponível!
            </P>
          </Flex>
          <Button>
            <P $style={{ size: "22px", weight: "600" }}>CONSULTAR OS VALORES</P>
          </Button>
        </Flex>
      </Container>
    </DashLayout>
  );
};

export default Panel;
