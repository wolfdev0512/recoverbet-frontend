import React from "react";
import { useNavigate } from "react-router-dom";

import Flex from "components/Base/Flex";
import ModalLayout from "components/Layouts/ModalLayout";

import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

import ImageSupport from "assets/images/support.png";
import { P } from "components/Base/Text";
import DashLayout from "components/Layouts/DashLayout";

const SupportPage = (props) => {
  const navigate = useNavigate();

  return (
    <DashLayout>
      <ModalLayout
        show={true}
        closeModal={() => {
          props.pastRoute ?? navigate("/dash");
        }}
      >
        <Flex
          $style={{
            w: "400px",
            h: "fit-content",
            m: "auto",
            vAlign: "center",
            fDirection: "column",
          }}
        >
          <img
            src={ImageSupport}
            alt="No Support"
            style={{ width: "60px", height: "60px" }}
          />
          <P
            $style={{
              size: "40px",
              weight: "800",
              lH: "150%",
              color: "#F6BE76",
            }}
          >
            Suporte
          </P>
          <P
            $style={{
              size: "20px",
              weight: "400",
              lH: "150%",
              color: "rgba(199, 199, 199, 0.5)",
              align: "center",
              m: "25px 0px 0px 0px",
            }}
          >
            Está com alguma dúvida ou precisando de ajuda? Contate nosso suporte
            via Whatsapp ou se preferir via email.
          </P>
          <Flex
            $style={{
              m: "25px 0px 0px 0px ",
            }}
          >
            <Flex
              $style={{
                w: "50px",
                h: "50px",
                vAlign: "center",
                hAlign: "center",
                back: "#292929",
                radius: "8px",
                m: "0px 40px 0px 0px ",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <IoIosMail size={30} color="white" />
              </div>
            </Flex>
            <Flex
              $style={{
                w: "50px",
                h: "50px",
                vAlign: "center",
                hAlign: "center",
                back: "#292929",
                radius: "8px",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <RiWhatsappFill size={30} color="white" />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </ModalLayout>
    </DashLayout>
  );
};

export default SupportPage;
