import React, { useState, useEffect } from "react";

// Layout
import DashLayout from "components/Layouts/DashLayout";
import ModalLayout from "components/Layouts/ModalLayout";

// component
import { P, Span } from "components/Base/Text";
import Flex from "components/Base/Flex";
import ProgressBar from "components/Progess";

import { RequestItem } from "components/Item";

// styled
import { Container, Button, ActiveLayout, ActiveButton } from "./styled";

// Image
import { SecurityIcon } from "assets/icons";
import LogoImage from "assets/images/logo_1.png";
import LogoSuccessImage from "assets/images/logo_4.png";
import ImageMoney from "assets/images/money.png";

// hook
import useModal from "hook/useModal";

//------------------------------------------------------
const Panel = () => {
  const [active, setActive] = useState(0);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 1);
    }, 100);

    if (value === 100) {
      clearInterval(interval);
      setActive(2);
    }

    return () => clearInterval(interval);
  }, [value]);

  const serveModal = useModal();

  return (
    <DashLayout>
      <Container>
        {active === 0 ? (
          <Flex $style={{ gap: "29px", w: "1050px", fDirection: "column" }}>
            <P
              $style={{
                size: "28px",
                lH: "150%",
                weight: "700",
                color: "#F6BE76",
              }}
            >
              Preencha as informações solicitadas abaixo para consultar os
              valores disponíveis para saque referente as suas perdas..
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
                $style={{
                  size: "18px",
                  color: "#9B9B9B",
                  m: "0px 0px 0px 12px",
                }}
              >
                Nós protegemos seus dados, utilizaremos essas informações apenas
                para poder consultar o valor disponível!
              </P>
            </Flex>
            <Button onClick={() => setActive(1)}>
              <P $style={{ size: "22px", weight: "600" }}>
                CONSULTAR OS VALORES
              </P>
            </Button>
          </Flex>
        ) : (
          <ActiveLayout>
            {active === 2 ? (
              <Flex
                $style={{ w: "400px", fDirection: "column", vAlign: "center" }}
              >
                <img
                  src={LogoSuccessImage}
                  alt="No Logo"
                  style={{ width: "200px", height: "200px" }}
                />
                <P
                  $style={{
                    color: "#FFFFFF",
                    size: "24px",
                    m: "0px 0px 25px 0px",
                    align: "center",
                  }}
                >
                  Sua análise foi concluída com{" "}
                  <Span $style={{ color: "#1DAF51" }}>sucesso!</Span>
                  <Span $style={{ color: "#F6BE76" }}>
                    Você tem valores a receber!
                  </Span>
                </P>
                <Flex
                  $style={{
                    p: "13px",
                    w: "100%",
                    radius: "12px",
                    back: "#292929",
                  }}
                >
                  <img
                    src={ImageMoney}
                    alt="no Money"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <P $style={{ size: "20px", m: "0px 0px 0px 10px" }}>
                    <Span $style={{ color: "#F9C178" }}>R$ 5754,28</Span> do
                    fundo de garantia estão disponíveis para solicitação de
                    estorno!
                  </P>
                </Flex>
                <ActiveButton
                  onClick={() => {
                    serveModal.openModal();
                  }}
                >
                  <P style={{ weight: "600", size: "18px" }}>
                    Solicitar reembolso
                  </P>
                </ActiveButton>
              </Flex>
            ) : (
              <Flex $style={{ fDirection: "column", vAlign: "center" }}>
                <img
                  src={LogoImage}
                  alt="No Logo"
                  style={{ width: "200px", height: "200px" }}
                />
                <P
                  $style={{
                    color: "#C7C7C7",
                    size: "14px",
                    m: "0px 0px 20px 0px",
                  }}
                >
                  Aproximadamente 2 minutos
                </P>
                <ProgressBar max={100} value={value} />
                <P
                  $style={{
                    size: "24px",
                    align: "center",
                    weight: "600",
                    w: "500px",
                    m: "25px 0px 0px 0px",
                  }}
                >
                  Consultando informações pelo Banco de dados financeiro…. 
                </P>
              </Flex>
            )}
          </ActiveLayout>
        )}
      </Container>
      <ModalLayout show={serveModal.isOpen} closeModal={serveModal.closeModal}>
        asdf
      </ModalLayout>
    </DashLayout>
  );
};

export default Panel;
