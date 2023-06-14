import React, { useState, useEffect } from "react";

// styled
import {
  Layout,
  Image,
  Menu,
  MenuContainer,
  Main,
  MainContainer,
  Sidebar,
  Header,
  User,
  UserImage,
  Button,
  Container,
  ContentContainer,
} from "./styled";

// hooks
import useModal from "hook/useModal";

// components
import { MenuItem } from "components/Item";

import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";
import ModalLayout from "../ModalLayout";
import InputField from "components/Field/Input";

// Image Upload
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

// styled
import {
  PanelIcon,
  RequestIcon,
  WithdrawalIcon,
  SupportIcon,
  DataIcon,
  OutIcon,
} from "assets/icons";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "redux/features/userSlice";

// router
import { useLocation, useNavigate } from "react-router-dom";

// image
import LogoImage from "assets/images/logo.gif";
import ImageSupport from "assets/images/support.png";
import ImageUser from "assets/images/user.png";
import ImageUpload from "assets/images/upload.png";

import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useResize from "hook/useResize";

// Heading Data
const HeadingList = [
  {
    url: "/dash",
    heading: "Painel",
    detail: "Escolha a plataforma e recupere seu dinheiro perdido",
  },
  {
    url: "/dash/request",
    heading: "Solicitações / Recuperar",
    detail: "Escolha a plataforma e recupere seu dinheiro perdido",
  },
  {
    url: "/dash/withdrawal",
    heading: "Meus saques",
    detail: "Verifique seus saques",
  },
  {
    url: "/dash/support",
    heading: "",
    detail: "",
  },
  {
    url: "/dash/data",
    heading: "",
    detail: "",
  },
];

//---------------------------------------------------------
const DashLayout = (props) => {
  // Redux
  const dispatch = useDispatch();

  // Router
  const location = useLocation();
  const navigate = useNavigate();

  const [w] = useResize();
  const [isMobile, setIsMobile] = useState(false);

  const loginUser = useSelector((state) => state.user);

  const [content, setContent] = useState({ heading: "", detail: "" });

  useEffect(() => {
    if (w <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [w]);

  useEffect(() => {
    setContent({
      heading: HeadingList.find((obj) => obj.url === location.pathname).heading,
      detail: HeadingList.find((obj) => obj.url === location.pathname).detail,
    });
  }, [location.pathname]);

  // Support
  const supportModal = useModal();

  // User
  const userModal = useModal();

  function getImageFileObject(imageFile) {
    console.log({ onAdd: imageFile });
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file });
  }

  return (
    <Layout>
      <Sidebar>
        <MenuContainer>
          <Menu>
            <Image src={LogoImage} alt="No Logo" />
            <Main>
              <MenuItem icon={PanelIcon} text="Painel" to={"/dash"} />
              <MenuItem
                icon={RequestIcon}
                text="Solicitar"
                to={"/dash/request"}
                mobile="#0B0B0B"
              />
              <MenuItem
                icon={WithdrawalIcon}
                text="Meus saques"
                tempText={"Saques"}
                to={"/dash/withdrawal"}
              />
              <div
                onClick={() => {
                  if (isMobile) {
                    return;
                  }
                  supportModal.openModal();
                }}
              >
                <MenuItem
                  icon={SupportIcon}
                  text="Suporte"
                  to={isMobile ? "/dash/support" : "#"}
                />
              </div>
              <div
                onClick={() => {
                  if (isMobile) {
                    return;
                  }
                  userModal.openModal();
                }}
              >
                <MenuItem
                  icon={DataIcon}
                  text="Meus Dados"
                  to={isMobile ? "/dash/data" : "#"}
                  tempText={"Dados"}
                />
              </div>
            </Main>
          </Menu>
          <Flex $style={{ w: "100%", p: "10px 10px 10px 10px" }}>
            <div
              onClick={() => {
                dispatch(
                  setUser({
                    user: false,
                    name: "Gabrielo Lopes",
                    gmail: "gabrielolopes@gmail.com",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/chainedx-3ec41.appspot.com/o/user.png?alt=media&token=06e76385-92f3-4a30-9d59-b7e1bdb73aaf&_gl=1*15rppda*_ga*NDUwNDQxNDQuMTY4NTg5MzQ0Mw..*_ga_CW55HF8NVT*MTY4NjQ2MDY4MS44LjEuMTY4NjQ2MDkyMy4wLjAuMA..",
                    pixKey: "089.98.253-83",
                    pass: "123123",
                  })
                );
                navigate("/");
              }}
            >
              <MenuItem icon={OutIcon} text="Sair" />
            </div>
          </Flex>
        </MenuContainer>
      </Sidebar>
      <MainContainer>
        <ContentContainer>
          <Header>
            <Flex $style={{ fDirection: "column" }}>
              <P
                $style={{
                  color: "#F6BE76",
                  size: "40px",
                  weight: "600",
                  m: "0px 0px 10px 0px",
                  queries: {
                    1440: {
                      size: "28px",
                    },
                  },
                }}
              >
                {content.heading}
              </P>
              <P
                $style={{
                  color: "#C7C7C7",
                  size: "16px",
                  queries: {
                    1440: {
                      w: "280px",
                      size: "14px",
                    },
                    768: {
                      w: "100%",
                    },
                    425: {
                      size: "12px",
                    },
                  },
                }}
              >
                {content.detail}
              </P>
            </Flex>
            {!isMobile && (
              <User>
                <UserImage src={loginUser.image} alt="No userImage"></UserImage>
                <div id="text">
                  <Flex
                    $style={{ fDirection: "column", m: "0px 0px 0px 10px" }}
                  >
                    <P
                      $style={{
                        size: "16px",
                        weight: "600",
                        queries: { 1440: { size: "12px" } },
                      }}
                    >
                      {loginUser.name}
                    </P>
                    <P
                      $style={{
                        size: "16px",
                        weight: "400",
                        queries: { 1440: { size: "12px" } },
                      }}
                    >
                      {loginUser.gmail}
                    </P>
                  </Flex>
                </div>
              </User>
            )}
          </Header>
          <Container>{props.children}</Container>
        </ContentContainer>
      </MainContainer>

      {/* Support Modal */}
      <ModalLayout
        show={supportModal.isOpen}
        closeModal={supportModal.closeModal}
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
      {/* User Modal */}
      <ModalLayout
        show={userModal.isOpen}
        closeModal={userModal.closeModal}
        height="800px"
      >
        <Flex
          $style={{
            w: "400px",
            h: "fit-content",
            m: "auto",
            fDirection: "column",
            vAlign: "center",
          }}
        >
          <img
            src={ImageUser}
            alt="No user"
            style={{ width: "60px", height: "60px" }}
          />
          <P
            $style={{
              size: "40px",
              weight: "800",
              lH: "150%",
              color: "#F6BE76",
              p: "0px 0px 10px 0px",
            }}
          >
            Meus dados
          </P>
          <ImageUploader
            style={{
              background: `url(${ImageUpload})`,
              backgroundSize: "100%,100%",
            }}
            onFileAdded={(img) => getImageFileObject(img)}
            onFileRemoved={(img) => runAfterImageDelete(img)}
          />

          <Formik
            initialValues={{
              name: loginUser.name,
              email: loginUser.gmail,
              pass: loginUser.pass,
              pix: loginUser.pixKey,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Campo obrigatório."),
              email: Yup.string()
                .email("Endereço de email invalido.")
                .required("Campo obrigatório."),
              pass: Yup.string()
                .min(6, "A senha deve ter pelo menos 6 caracteres")
                .required("Campo obrigatório."),
              pix: Yup.string().required("Campo obrigatório."),
            })}
            onSubmit={(values) => {
              userModal.closeModal();
            }}
          >
            {({ touched, errors }) => {
              return (
                <Flex
                  $style={{
                    w: "400px",
                    queries: {
                      768: {
                        w: "100%",
                      },
                    },
                  }}
                >
                  <Form style={{ width: "100%" }}>
                    <Button>
                      <P
                        $style={{ weight: "600", size: "16px", color: "white" }}
                      >
                        EDITAR DADOS
                      </P>
                    </Button>
                    <InputField
                      name="name"
                      placeholder="Seu nome"
                      question="Seu nome"
                      image={0}
                      pass={false}
                    />
                    <InputField
                      name="email"
                      placeholder="Seu e-mail"
                      question="Seu e-mail"
                      image={1}
                      pass={false}
                    />
                    <InputField
                      name="pass"
                      placeholder="Sua senha"
                      question="Sua senha"
                      image={2}
                      pass={true}
                    />
                    <InputField
                      name="pix"
                      placeholder="Sua chave Pix"
                      question="Sua chave Pix"
                      image={2}
                      pass={true}
                    />
                  </Form>
                </Flex>
              );
            }}
          </Formik>
        </Flex>
      </ModalLayout>
    </Layout>
  );
};

export default DashLayout;
