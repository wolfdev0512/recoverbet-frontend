import React, { useState, useEffect } from "react";

// Layout
import DashLayout from "components/Layouts/DashLayout";

// component
import Platform from "components/Platform";

import { P } from "components/Base/Text";
import Flex from "components/Base/Flex";
import ProgressBar from "components/Progess";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setData, setValue } from "redux/features/dataSlice";

// router

import { useNavigate } from "react-router-dom";

//hook
import useResize from "hook/useResize";

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
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dataChart = [
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tempValue = useSelector((state) => state.data.value);

  const [active, setActive] = useState(false);

  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    if (data) {
      setActive(true);
      dispatch(setData({ data: false }));
    }
  }, []);

  const [w] = useResize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (w <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [w]);

  return (
    <DashLayout>
      <Container>
        {!isMobile && <Platform active={active} />}
        <Flex
          $style={{
            w: "100%",
            m: "20px 0px 0px 0px",
            gap: "50px",
            queries: {
              1440: {
                fDirection: "column",
              },
            },
          }}
        >
          <ContentContainer>
            <Flex $style={{ fDirection: "column" }}>
              <P
                $style={{
                  size: "28px",
                  weight: "500",
                  m: "0px 0px 25px 0px",
                  queries: {
                    1440: {
                      size: "24px",
                    },
                  },
                }}
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
                      queries: {
                        1024: {
                          p: "50px",
                        },
                        500: {
                          p: "30px",
                        },
                      },
                    }}
                  >
                    <P
                      $style={{
                        color: "#F6BE76",
                        weight: "600",
                        size: "45px",
                        m: "0px 0px 25px 0px",
                        queries: {
                          768: {
                            size: "30px",
                          },
                          500: {
                            size: "25px",
                          },
                        },
                      }}
                    >
                      Gabrielo Lopes
                    </P>
                    <P
                      $style={{
                        color: "rgba(199, 199, 199, 0.5)",
                        size: "16px",
                        m: "0px 0px 25px 0px",
                        queries: {
                          768: {
                            size: "14px",
                          },
                          500: {
                            size: "13px",
                          },
                        },
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

                        queries: {
                          768: {
                            p: "10px 20px 10px 20px",
                          },
                          500: {
                            p: "10px 15px",
                          },
                        },
                      }}
                    >
                      <Flex $style={{ vAlign: "center" }}>
                        <PicIcon />
                        <P
                          $style={{
                            family: "sora",
                            size: "20px",
                            m: "0px 0px 0px 10px",
                            queries: {
                              500: {
                                size: "16px",
                              },
                            },
                          }}
                        >
                          089.98.253-83
                        </P>
                      </Flex>
                      <div
                        onClick={() => {
                          navigate("/dash/data");
                        }}
                      >
                        <SettingIcon />
                      </div>
                    </Flex>
                    <Flex $style={{ fDirection: "column" }}>
                      <P
                        $style={{
                          weight: "600",
                          size: "43px",
                          m: "25px 0px 10px 0px",
                          queries: {
                            768: {
                              size: "35px",
                            },
                            500: {
                              size: "26px",
                            },
                          },
                        }}
                      >
                        R${tempValue} reais
                      </P>
                      <P
                        $style={{
                          color: "rgba(199, 199, 199, 0.5)",
                          size: "16px",
                          queries: {
                            768: {
                              size: "14px",
                            },
                          },
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
                          queries: {
                            500: {
                              m: "0px 15px 0px 0px",
                            },
                          },
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
                        <div
                          style={{ width: "100%", height: "100%" }}
                          onClick={() => {
                            navigate("/dash/withdrawal");
                          }}
                        >
                          <RotatoIcon />
                          <P
                            $style={{
                              m: "5px 0px 0px 0px",
                              color: "rgba(199, 199, 199, 0.5)",
                            }}
                          >
                            Histórico
                          </P>
                        </div>
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
                      queries: {
                        600: {
                          p: "25px 30px",
                        },
                      },
                    }}
                  >
                    <P
                      $style={{
                        color: "#F6BE76",
                        weight: "600",
                        size: "45px",
                        m: "0px 0px 25px 0px",
                        queries: {
                          1440: {
                            size: "35px",
                          },
                          768: {
                            size: "28px",
                          },
                        },
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
                        queries: {
                          1440: {
                            size: "20px",
                          },
                          768: {
                            size: "16px",
                          },
                        },
                      }}
                    >
                      Primeiros passos
                    </P>
                    <Flex
                      $style={{
                        w: "600px",
                        h: "fit-content",
                        queries: {
                          1700: {
                            w: "400px",
                          },
                          768: {
                            w: "100%",
                          },
                        },
                      }}
                    >
                      <ProgressBar max={100} value={60} />
                    </Flex>
                    <P
                      $style={{
                        color: "white",
                        weight: "500",
                        size: "20px",
                        m: "10px 0px 10px 0px",
                        queries: {
                          1440: {
                            size: "16px",
                          },
                          768: {
                            size: "12px",
                          },
                        },
                      }}
                    >
                      Realize alguns processos para liberar sua carteira
                    </P>
                    <P
                      $style={{
                        color: "#C7C7C7",
                        weight: "400",
                        size: "18px",
                        queries: {
                          768: {
                            size: "14px",
                          },
                        },
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
                        <P
                          $style={{
                            m: "0px 0px 0px 10px",
                            queries: {
                              768: {
                                size: "12px",
                              },
                            },
                          }}
                        >
                          Anote o e-mail utilizado na plataforma
                        </P>
                      </Flex>
                      <Flex $style={{ vAlign: "center" }}>
                        <ClockIcon />
                        <P
                          $style={{
                            m: "0px 0px 0px 10px",
                            queries: {
                              768: {
                                size: "12px",
                              },
                            },
                          }}
                        >
                          Anote o e-mail utilizado na plataforma
                        </P>
                      </Flex>
                    </Flex>
                    <Button
                      onClick={() => {
                        dispatch(setData({ data: true }));
                        dispatch(setValue());
                        navigate("/dash/request");
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
                    R${" "}
                    {Math.floor(Math.random() * 100) > 0
                      ? Math.floor(Math.random() * 100)
                      : 34}
                    .{Math.floor(Math.random() * 1000)}.
                    {Math.floor(Math.random() * 1000)}.
                    {Math.floor(Math.random() * 1000)},
                    {Math.floor(Math.random() * 10)}
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
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart
                  width={350}
                  height={350}
                  data={dataChart}
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
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </Flex>
      </Container>
    </DashLayout>
  );
};

export default Panel;
