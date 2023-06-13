import React, { useState } from "react";

// Layout
import DashLayout from "components/Layouts/DashLayout";

// component
import Platform from "components/Platform";

import { P } from "components/Base/Text";
import Flex from "components/Base/Flex";
import ProgressBar from "components/Progess";

// styled
import {
  Container,
  ContentContainer,
  Button,
  ChartContainer,
  Total,
  Chart,
} from "./styled";

// image
import {
  EmailIcon,
  ClockIcon,
  SettingIcon,
  PicIcon,
  ArrowIcon,
  RotatoIcon,
} from "assets/icons";

// recharts

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "19 de Mai",
    data: 13,
  },
  {
    name: "26 de Mai",
    data: 11,
  },
  {
    name: "2 de Jun",
    data: 13,
  },
  {
    name: "9 de Jun",
    data: 20,
  },
  {
    name: "",
    data: 15,
  },
];

//------------------------------------------------------
const Panel = () => {
  const [active, setActive] = useState(false);

  return (
    <DashLayout>
      {/* <Container>
        <Platform active={active} />
        <Flex
          $style={{
            w: "100%",
            h: "100%",
            m: "20px 0px 0px 0px",
            gap: "50px",
          }}
        >
          <ContentContainer>
            <Flex $style={{ fDirection: "column" }}>
              <P
                $style={{ size: "28px", weight: "500", m: "0px 0px 25px 0px" }}
              >
                Sua carteira
              </P>
              {active ? (
                <>
                  <Flex
                    $style={{
                      p: "80px",
                      fDirection: "column",
                      back: "linear-gradient(218.38deg, #050505 -41.34%, #181818 63.06%);",
                      radius: "5px",
                    }}
                  >
                    <P
                      $style={{
                        color: "#F6BE76",
                        weight: "600",
                        size: "45px",
                        m: "0px 0px 25px 0px",
                      }}
                    >
                      Gabrielo Lopes
                    </P>
                    <P
                      $style={{
                        color: "rgba(199, 199, 199, 0.5)",
                        size: "16px",
                        m: "0px 0px 25px 0px",
                      }}
                    >
                      Sua chave pix
                    </P>
                    <Flex
                      $style={{
                        w: "100%",
                        p: "10px 66px 10px 42px",
                        hAlign: "space-between",
                        vAlign: "center",
                        back: "#161411",
                        radius: "6px",
                      }}
                    >
                      <Flex $style={{ vAlign: "center" }}>
                        <PicIcon />
                        <P
                          $style={{
                            family: "sora",
                            size: "20px",
                            m: "0px 0px 0px 10px",
                          }}
                        >
                          089.98.253-83
                        </P>
                      </Flex>
                      <SettingIcon />
                    </Flex>
                    <Flex $style={{ fDirection: "column" }}>
                      <P
                        $style={{
                          weight: "600",
                          size: "43px",
                          m: "25px 0px 10px 0px",
                        }}
                      >
                        R$5.375,50 reais
                      </P>
                      <P
                        $style={{
                          color: "rgba(199, 199, 199, 0.5)",
                          size: "16px",
                        }}
                      >
                        Valor disponível
                      </P>
                    </Flex>
                    <Flex
                      $style={{
                        m: "25px 0px 0px 0px",
                      }}
                    >
                      <Flex
                        $style={{
                          fDirection: "column",
                          vAlign: "center",
                          m: "0px 25px 0px 0px",
                        }}
                      >
                        <ArrowIcon />
                        <P
                          $style={{
                            m: "5px 0px 0px 0px",
                            color: "rgba(199, 199, 199, 0.5)",
                          }}
                        >
                          Saque
                        </P>
                      </Flex>
                      <Flex $style={{ fDirection: "column", vAlign: "center" }}>
                        <RotatoIcon />
                        <P
                          $style={{
                            m: "5px 0px 0px 0px",
                            color: "rgba(199, 199, 199, 0.5)",
                          }}
                        >
                          Histórico
                        </P>
                      </Flex>
                    </Flex>
                  </Flex>
                </>
              ) : (
                <>
                  <Flex
                    $style={{
                      p: "25px 50px",
                      fDirection: "column",
                      back: "linear-gradient(218.38deg, #050505 -41.34%, #181818 63.06%);",
                      radius: "5px",
                    }}
                  >
                    <P
                      $style={{
                        color: "#F6BE76",
                        weight: "600",
                        size: "45px",
                        m: "0px 0px 25px 0px",
                      }}
                    >
                      Gabrielo Lopes
                    </P>
                    <P
                      $style={{
                        color: "white",
                        weight: "600",
                        size: "24px",
                        m: "0px 0px 25px 0px",
                      }}
                    >
                      Primeiros passos
                    </P>
                    <ProgressBar max={100} value={60} />
                    <P
                      $style={{
                        color: "white",
                        weight: "500",
                        size: "20px",
                        m: "10px 0px 10px 0px",
                      }}
                    >
                      Realize alguns processos para liberar sua carteira
                    </P>
                    <P
                      $style={{
                        color: "#C7C7C7",
                        weight: "400",
                        size: "18px",
                      }}
                    >
                      1-3 processos
                    </P>
                    <Flex
                      $style={{
                        m: "25px 0px 0px 0px",
                        p: "10px",
                        fDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Flex $style={{ vAlign: "center" }}>
                        <EmailIcon />
                        <P $style={{ m: "0px 0px 0px 10px" }}>
                          Anote o e-mail utilizado na plataforma
                        </P>
                      </Flex>
                      <Flex $style={{ vAlign: "center" }}>
                        <ClockIcon />
                        <P $style={{ m: "0px 0px 0px 10px" }}>
                          Anote o e-mail utilizado na plataforma
                        </P>
                      </Flex>
                    </Flex>
                    <Button
                      onClick={() => {
                        setActive(true);
                      }}
                    >
                      <P $style={{ weight: 600, size: "16px", color: "white" }}>
                        REALIZAR ETAPAS
                      </P>
                    </Button>
                  </Flex>
                </>
              )}
            </Flex>
          </ContentContainer>
          <ChartContainer>
            <Flex>
              <Total>
                <Flex
                  $style={{ fDirection: "column", p: " 0px 12.5px 0px 0px" }}
                >
                  <P
                    $style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      m: "0px 0px 4px 0px",

                      size: "8px",
                    }}
                  >
                    Total disponível
                  </P>
                  <P $style={{ size: "24px", weight: "500" }}>
                    R$ 28.000.197.327,00
                  </P>
                </Flex>
              </Total>
              <Flex $style={{ fDirection: "column", p: " 0px 0px 0px 12.5px" }}>
                <P
                  $style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    m: "0px 0px 4px 0px",

                    size: "8px",
                  }}
                >
                  Nº de recuperações
                </P>
                <P $style={{ size: "24px", weight: "500" }}>1.500</P>
              </Flex>
            </Flex>
            <Chart>
              <AreaChart
                width={350}
                height={350}
                data={data}
                margin={{
                  top: 30,
                  right: 0,
                  left: -30,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colordata" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F6BF78" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F6BF78" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  cursor={false}
                  contentStyle={{ background: "none", color: "green" }}
                />
                <Area
                  type="monotone"
                  dataKey="data"
                  stroke="#F6BF78"
                  fill={"url(#colordata)"}
                />
              </AreaChart>
            </Chart>
          </ChartContainer>
        </Flex>
      </Container> */}
    </DashLayout>
  );
};

export default Panel;
