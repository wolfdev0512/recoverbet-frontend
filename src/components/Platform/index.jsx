import React from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// styled
import { Layout, SwiperItem, LogoIcon } from "./styled";

// component
import { P } from "components/Base/Text";
import Flex from "components/Base/Flex";

// image
import { AddIcon } from "assets/icons";
import LogoImage from "assets/images/logo_3.png";

//----------------------------------------------------------

const Platform = (props) => {
  return (
    <Layout>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={50}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },

          1000: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1470: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },

          1650: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {props.data ? (
          <>
            <SwiperSlide>
              <SwiperItem>
                <P
                  $style={{
                    color: "#D9D9D9",
                    size: "16px",
                    lH: "150%",
                    queries: {
                      1440: {
                        size: "14px",
                      },
                      1024: {
                        size: "12px",
                      },
                    },
                  }}
                >
                  Seu ultimo saque
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P
                    $style={{
                      size: "24px",
                      weight: "600",
                      lH: "150%",
                      queries: {
                        1440: {
                          size: "20px",
                        },
                        1024: {
                          size: "16px",
                        },
                      },
                    }}
                  >
                    48 horas
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem>
                <P
                  $style={{
                    color: "#D9D9D9",
                    size: "16px",
                    lH: "150%",
                    queries: {
                      1440: {
                        size: "14px",
                      },
                      1024: {
                        size: "12px",
                      },
                    },
                  }}
                >
                  Valor sacado
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P
                    $style={{
                      size: "24px",
                      weight: "600",
                      lH: "150%",
                      queries: {
                        1440: {
                          size: "20px",
                        },
                        1024: {
                          size: "16px",
                        },
                      },
                    }}
                  >
                    R$8.375,20 reais
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>

            <SwiperSlide>
              <SwiperItem>
                <P
                  $style={{
                    color: "#D9D9D9",
                    size: "16px",
                    lH: "150%",
                    queries: {
                      1440: {
                        size: "14px",
                      },
                      1024: {
                        size: "12px",
                      },
                    },
                  }}
                >
                  Receitas
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P
                    $style={{
                      size: "24px",
                      weight: "600",
                      lH: "150%",
                      queries: {
                        1440: {
                          size: "20px",
                        },
                        1024: {
                          size: "16px",
                        },
                      },
                    }}
                  >
                    R$10.575,20 reais
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide>
              <SwiperItem>
                <P
                  $style={{
                    color: "#D9D9D9",
                    size: "16px",
                    queries: {
                      1440: {
                        size: "14px",
                      },
                      1024: {
                        size: "12px",
                      },
                    },
                  }}
                >
                  Plataforma
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <LogoIcon src={LogoImage} alt="No logo" />
                  <P
                    $style={{
                      size: "16px",
                      weight: "600",
                      m: "0px 0px 0px 10px",
                    }}
                  >
                    Recovery Bet
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem>
                <P
                  $style={{
                    color: "#D9D9D9",
                    size: "16px",
                    lH: "150%",
                    queries: {
                      1440: {
                        size: "14px",
                      },
                      1024: {
                        size: "12px",
                      },
                    },
                  }}
                >
                  Valor total recuperado
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P
                    $style={{
                      size: "24px",
                      weight: "600",
                      lH: "150%",
                      queries: {
                        1440: {
                          size: "20px",
                        },
                        1024: {
                          size: "16px",
                        },
                      },
                    }}
                  >
                    R$
                    {Math.floor(Math.random() * 100) > 0
                      ? Math.floor(Math.random() * 100)
                      : "50"}
                    ,{Math.floor(Math.random() * 1000)},
                    {Math.floor(Math.random() * 100)} reais
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
          </>
        )}
        {props.active && (
          <>
            <SwiperSlide>
              <SwiperItem>
                <P
                  $style={{
                    color: "#D9D9D9",
                    size: "16px",
                    lH: "150%",
                    queries: {
                      1440: {
                        size: "14px",
                      },
                      1024: {
                        size: "12px",
                      },
                    },
                  }}
                >
                  Porcentagem recuperada
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P
                    $style={{
                      size: "24px",
                      weight: "600",
                      lH: "150%",
                      queries: {
                        1440: {
                          size: "20px",
                        },
                        1024: {
                          size: "16px",
                        },
                      },
                    }}
                  >
                    97.23%
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem>
                <Flex $style={{ fDirection: "column", vAlign: "center" }}>
                  <AddIcon />
                  <P
                    $style={{
                      color: "#D9D9D9",
                      size: "15px",
                      m: "10px 0px 0px 0px",
                      align: "center",
                      queries: {
                        1440: {
                          size: "13px",
                        },
                        1024: {
                          size: "11px",
                        },
                      },
                    }}
                  >
                    Adicionar uma nova plataforma
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </Layout>
  );
};

export default Platform;
