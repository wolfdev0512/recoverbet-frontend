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
import {
  Container,
  Button,
  ActiveLayout,
  ActiveButton,
  Submit,
  DateContainer,
  InputContainer,
} from "./styled";

// Image
import { SecurityIcon } from "assets/icons";
import LogoImage from "assets/images/logo_1.png";
import LogoGif from "assets/images/logo.gif";
import LogoSuccessImage from "assets/images/logo_4.png";
import ImageMoney from "assets/images/money.png";

import InputField from "components/Field/Input";

// router
import { useNavigate } from "react-router-dom";

// hook
import useModal from "hook/useModal";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

// DatePicker
import { DateRangePicker } from "rsuite";

const data = ["blaze", "playpix", "bet365"];
const data1 = ["CPF", "Celular", "email"];

//------------------------------------------------------
const Panel = () => {
  const [date, setDate] = useState([new Date(), new Date()]);

  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [next, setNext] = useState(0);

  const [value, setValue] = useState(0);

  const [select1, setSelect1] = useState(-1);
  const [select2, setSelect2] = useState(-1);

  useEffect(() => {
    let interval;
    if (active === 1) {
      interval = setInterval(() => {
        setValue((prevValue) => prevValue + 1);
      }, 100);
    }

    if (value === 100) {
      clearInterval(interval);
      setActive(2);
    }

    return () => clearInterval(interval);
  }, [active, value]);

  const serveModal = useModal();

  return (
    <DashLayout>
      <Container>
        {active === 0 ? (
          <Flex
            $style={{
              gap: "29px",
              w: "100%",
              fDirection: "column",
              p: "50px",
              queries: {
                1024: {
                  p: "40px",
                },
                768: {
                  p: "20px",
                },
              },
            }}
          >
            <P
              $style={{
                size: "28px",
                lH: "150%",
                weight: "700",
                color: "#F6BE76",
                queries: {
                  1440: {
                    size: "22px",
                  },
                  1024: {
                    size: "20px",
                  },
                  1024: {
                    size: "16px",
                  },
                },
              }}
            >
              Preencha as informações solicitadas abaixo para consultar os
              valores disponíveis para saque referente as suas perdas..
            </P>
            <RequestItem
              label={data[select1]}
              initialLabel={
                "Selecione a plataforma para realizar a consulta de valores perdidos:"
              }
              container={(onClose) => (
                <div>
                  {data.map((item, key) => (
                    <div
                      key={key}
                      onClick={() => {
                        setSelect1(key);
                        onClose();
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            />
            <InputContainer>
              <input
                type="text"
                placeholder="Qual o e-mail de cadastro utilizado na plataforma?"
              />
            </InputContainer>

            <DateContainer>
              <DateRangePicker
                showOneCalendar
                placeholder="Selecione o período para consulta e análise de perdas…"
              />
            </DateContainer>
            <Flex $style={{ vAlign: "center" }}>
              <SecurityIcon />
              <P
                $style={{
                  size: "18px",
                  color: "#9B9B9B",
                  m: "0px 0px 0px 12px",
                  queries: {
                    1440: {
                      size: "16px",
                    },
                    1024: {
                      size: "14px",
                    },
                  },
                }}
              >
                Nós protegemos seus dados, utilizaremos essas informações apenas
                para poder consultar o valor disponível!
              </P>
            </Flex>
            <Button onClick={() => setActive(1)}>
              <P
                $style={{
                  size: "22px",
                  weight: "600",
                  align: "center",
                  queries: {
                    768: {
                      size: "16px",
                    },
                  },
                }}
              >
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
                  src={LogoGif}
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
                  Aproximadamente {Math.floor((100 - value) / 10)} seconds...
                </P>
                <ProgressBar max={100} value={value} />
                <P
                  $style={{
                    size: "24px",
                    align: "center",
                    weight: "600",
                    w: "500px",
                    m: "50px 0px 0px 0px",
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
        {next === 1 ? (
          <Flex
            $style={{
              w: "80%",
              fDirection: "column",
              vAlign: "center",
              h: "fit-content",
              m: "auto",
            }}
          >
            <P
              $style={{
                color: "#1DAF51",
                size: "30px",
                weight: "700",
                lH: "150%",
                align: "center",
              }}
            >
              Solicitação de estorno realizada com sucesso! 🥳🎉
            </P>
            <Flex
              $style={{
                w: "100%",
                h: "150px",
                vAlign: "center",
                hAlign: "center",
                back: "#2B2B2B",
                radius: "12px",
                m: "25px 0px 25px 0px",
              }}
            >
              <img src={ImageMoney} alt="No money" />
              <P
                $style={{
                  color: "#F9C178",
                  size: "37px",
                  weight: "700",
                  lH: "150%",
                  m: "0px 0px 0px 20px",
                }}
              >
                R$ 5754,28
              </P>
            </Flex>

            <Flex
              $style={{
                w: "100%",
                h: "fit-content",
                p: "15px 33px",
                vAlign: "center",
                hAlign: "center",
                border: "1px solid #C7C7C7",
                radius: "60px",
              }}
            >
              <SecurityIcon />
              <P
                $style={{
                  size: "14px",
                  color: "#C7C7C7",
                  w: "80%",
                  m: "0px 0px 0px 16px",
                }}
              >
                O Sistema do Recover Bet já recebeu sua solicitação e estamos
                processando seu pagamento junto a plataforma selecionada!
              </P>
            </Flex>
            <P
              $style={{
                color: "#F6BE76",
                size: "24px",
                m: "30px 0px 30px 0px",
                weight: "600",
              }}
            >
              Sobre a transação:
            </P>

            <Flex
              $style={{
                w: "100%",
                hAlign: "space-between",
                back: "#292929",
                radius: "5px",
              }}
            >
              <P
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                ID: #5G%evSJt5NEbuXH
              </P>
              <P
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                14:47h
              </P>
              <P
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                06 de Junho, 2023
              </P>
              <P
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                R$5.754,28
              </P>
            </Flex>
            <div
              style={{ width: "100%" }}
              onClick={() => {
                navigate("/dash");
              }}
            >
              <Flex
                $style={{
                  w: "100%",
                  h: "60px",
                  m: "25px 0px 0px 0px",
                  back: "#1DAF51",
                  radius: "12px",
                  vAlign: "center",
                  hAlign: "center",
                }}
              >
                <P
                  $style={{
                    weight: "600",
                    size: "16px",
                    lH: "125%",
                  }}
                >
                  VOLTAR PARA O PAINEL!
                </P>
              </Flex>
            </div>
            <P
              $style={{
                color: "#696969",
                size: "12px",
                weight: "600",
                lH: "150%",
                align: "center",
                m: "10px 0px 0px 0px",
              }}
            >
              O valor poder ser creditado em até 2 dias úteis!
            </P>
          </Flex>
        ) : (
          <Flex
            $style={{
              w: "80%",
              fDirection: "column",
              vAlign: "center",
              h: "fit-content",
              m: "auto",
            }}
          >
            <P
              $style={{
                color: "#F6BE76",
                size: "48px",
                weight: "700",
                lH: "150%",
              }}
            >
              Realizar saque
            </P>
            <Flex
              $style={{
                fDirection: "column",
                w: "100%",
                h: "150px",
                vAlign: "center",
                hAlign: "center",
                back: "#2B2B2B",
                radius: "12px",
                m: "25px 0px 25px 0px",
              }}
            >
              <Flex
                $style={{
                  fDirection: "column",
                }}
              >
                <P>Saldo disponível:</P>
                <P
                  $style={{
                    color: "white",
                    size: "36px",
                    weight: "700",
                    lH: "150%",
                  }}
                >
                  R$10.575,20 reais
                </P>
              </Flex>
            </Flex>
            <RequestItem
              label={data1[select2]}
              initialLabel={"Selecione o tipo de chave pix :"}
              container={(onClose) => (
                <div>
                  {data1.map((item, key) => (
                    <div
                      key={key}
                      onClick={() => {
                        setSelect2(key);
                        onClose();
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            />
            <Formik
              initialValues={{
                code: "089.98.253-83",
              }}
              validationSchema={Yup.object({
                code: Yup.string().required("Campo obrigatório."),
              })}
              onSubmit={(values) => {
                setNext(1);
              }}
            >
              {({ touched, errors }) => {
                return (
                  <Flex
                    $style={{
                      w: "100%",
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <InputField
                        name="code"
                        placeholder="Insira sua chave pix no campo abaixo:"
                        question="Insira sua chave pix no campo abaixo:"
                        image={3}
                        pass={false}
                        authError={false}
                      />
                      <Submit
                        touched={Object.keys(touched).length}
                        error={!errors.code}
                        authError={false}
                      >
                        <P
                          $style={{
                            weight: "600",
                            size: "16px",
                            lH: "125%",
                          }}
                        >
                          SACAR TODO VALOR
                        </P>
                      </Submit>
                    </Form>
                  </Flex>
                );
              }}
            </Formik>
          </Flex>
        )}
      </ModalLayout>
    </DashLayout>
  );
};

export default Panel;
