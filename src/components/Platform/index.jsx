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
      <Swiper slidesPerView={4} spaceBetween={50}>
        {props.data ? (
          <>
            <SwiperSlide>
              <SwiperItem>
                <P $style={{ color: "#D9D9D9", size: "16px", lH: "150%" }}>
                  Seu ultimo saque
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P $style={{ size: "24px", weight: "700", lH: "150%" }}>
                    48 horas
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem>
                <P $style={{ color: "#D9D9D9", size: "16px", lH: "150%" }}>
                  Valor sacado
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P $style={{ size: "24px", weight: "700", lH: "150%" }}>
                    R$8.375,20 reais
                  </P>
                </Flex>
              </SwiperItem>
            </SwiperSlide>

            <SwiperSlide>
              <SwiperItem>
                <P $style={{ color: "#D9D9D9", size: "16px", lH: "150%" }}>
                  Receitas
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P $style={{ size: "24px", weight: "700", lH: "150%" }}>
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
                <P $style={{ color: "#D9D9D9", size: "16px" }}>Plataforma</P>
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
                      weight: "700",
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
                <P $style={{ color: "#D9D9D9", size: "16px", lH: "150%" }}>
                  Valor total recuperado
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P $style={{ size: "24px", weight: "700", lH: "150%" }}>
                    R$10.575,20 reais
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
                <P $style={{ color: "#D9D9D9", size: "16px", lH: "150%" }}>
                  Porcentagem recuperada
                </P>
                <Flex
                  $style={{
                    w: "fit-content",
                    vAlign: "center",
                    m: "10px 0px 0px 0px",
                  }}
                >
                  <P $style={{ size: "24px", weight: "700", lH: "150%" }}>
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
                      size: "16px",
                      m: "10px 0px 0px 0px",
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
