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

// router
import { useSelector } from "react-redux";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

// DatePicker
import { DateRangePicker } from "rsuite";

const data = [
  "Blaze",
  "Bet365",
  "Betano",
  "NetBet",
  "Playpix",
  "Betfair",
  "Pixbet",
  "Sportingbet",
  "Skybet",
  "Pokerstars",
  "Afun",
  "Simples Bet",
  "TVbet",
  "BetPix",
  "BetNacional",
  "Bet king",
  "20Bet",
  "Luva Bet",
  "Mansão Maromba Bet",
  "1xBet",
  "BetWay",
  "NetBet",
  "188Bet",
  "Rivalo",
  "22 Bet",
  "10 Bet",
  "BetWarrior",
  "BetGold",
  "Bwin",
  "Casino-X",
  "EnergyBet",
  "GG.BET",
  "KTO",
  "Sky Bet",
  "LV BET",
  "888sport",
  "XBet",
  "VBet",
  "NoviBet",
  "IviBet",
  "BetSul",
  "Betboo",
  "Futbet",
  "Bet7k",
  "Vai de Bet",
  "Global Bet",
];
const data1 = ["CPF/CNPJ", "Telefone", "E-Mail", "Chave aleatoria"];

const Texts = [
  "Consultando informações pelo Banco de dados financeiro….",
  "Processando seu histórico na plataforma…",
  " Por favor, aguarde enquanto nosso sistema verifica valores a receber…",
  "O Recover Bet está consultando suas perdas…",
];

//------------------------------------------------------
const Panel = () => {
  const tempValue = useSelector((state) => state.data.value);
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
      {active === 0 ? (
        <Container>
          <Flex
            $style={{
              gap: "29px",
              w: "100%",
              h: "100%",
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
        </Container>
      ) : (
        <ActiveLayout>
          {active === 2 ? (
            <Flex
              $style={{
                w: "400px",
                fDirection: "column",
                vAlign: "center",
                queries: {
                  768: {
                    w: "90%",
                  },
                },
              }}
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
                  queries: {
                    1024: {
                      w: "400px",
                      size: "22px",
                    },
                    768: {
                      w: "300px",
                      size: "20px",
                    },
                    425: {
                      w: "250px",
                      size: "18px",
                    },
                  },
                }}
              >
                Sua análise foi concluída com
                <span style={{ color: "#1DAF51" }}>&nbsp;sucesso!</span>
                <P
                  $style={{
                    color: "#F6BE76",
                  }}
                >
                  &nbsp;Você tem valores a receber!
                </P>
              </P>
              <Flex
                $style={{
                  p: "13px",
                  w: "100%",
                  maxW: "400px",
                  radius: "12px",
                  back: "#292929",
                }}
              >
                <img
                  src={ImageMoney}
                  alt="no Money"
                  style={{ width: "40px", height: "40px" }}
                />
                <P
                  $style={{
                    size: "20px",
                    m: "0px 0px 0px 10px",
                    queries: {
                      768: {
                        size: "18px",
                      },
                      425: {
                        size: "14px",
                      },
                    },
                  }}
                >
                  <Span $style={{ color: "#F9C178" }}>R$ {tempValue}</Span> do
                  fundo de garantia estão disponíveis para solicitação de
                  estorno!
                </P>
              </Flex>
              <ActiveButton
                onClick={() => {
                  serveModal.openModal();
                }}
              >
                Solicitar reembolso
              </ActiveButton>
            </Flex>
          ) : (
            <Flex
              $style={{
                fDirection: "column",
                vAlign: "center",
                queries: {
                  1024: {
                    w: "90%",
                  },
                },
              }}
            >
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
                  queries: {
                    1024: {
                      w: "90%",
                      size: "20px",
                    },
                    768: {
                      size: "18px",
                    },
                    425: {
                      size: "16px",
                    },
                  },
                }}
              >
                {Texts[Math.floor(value / 25)]}
              </P>
            </Flex>
          )}
        </ActiveLayout>
      )}
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
                queries: {
                  768: { size: "28px" },
                  425: { size: "24px" },
                },
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
                queries: {
                  768: { h: "fit-content", p: "20px 20px" },
                },
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
                  queries: {
                    768: { size: "32px" },
                    425: { size: "26px" },
                  },
                }}
              >
                R$ {tempValue}
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
                queries: {
                  768: { p: "15px" },
                },
              }}
            >
              <SecurityIcon />
              <P
                $style={{
                  size: "14px",
                  color: "#C7C7C7",
                  w: "100%",
                  m: "0px 0px 0px 16px",
                  queries: {
                    768: { size: "12px" },
                  },
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
                queries: {
                  768: { size: "20px" },
                  425: { size: "18px" },
                },
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
                vAlign: "center",
                p: "10px",
                queries: {
                  500: {
                    fDirection: "column",
                  },
                },
              }}
            >
              <Span
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                ID: #5G%evSJt5NEbuXH
              </Span>
              <Span
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                14:47h
              </Span>
              <Span
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                06 de Junho, 2023
              </Span>
              <Span
                $style={{
                  color: "#696969",
                  size: "12px",
                  weight: "600",
                  lH: "150%",
                  align: "center",
                }}
              >
                R$5.754,28
              </Span>
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
                queries: {
                  768: { size: "35px" },
                  425: { size: "30px" },
                },
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
                p: "10px",
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
                    queries: {
                      768: { size: "28px" },
                      425: { size: "24px" },
                    },
                  }}
                >
                  R${tempValue} reais
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
                code: "",
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
