import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// layout
import AuthLayout from "components/Layouts/AuthLayout";

// component
import Flex from "components/Base/Flex";
import { P, Span } from "components/Base/Text";
import InputField from "components/Field/Input";

// styled
import {
  Layout,
  Image,
  Submit,
  Toggle,
  GoRegister,
  Error,
  CodeEmail,
  LineOr,
} from "./styled";

// image
import LogoImage1 from "assets/images/logo_1.png";
import { MailIcon } from "assets/icons";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Redux
import { setUser } from "redux/features/userSlice";
import { useDispatch } from "react-redux";

// Notification
import { NotificationManager } from "react-notifications";

//------------------------------------------------------
const Register = () => {
  // Redux
  const dispatch = useDispatch();

  // router
  const navigate = useNavigate();

  // Forgot
  const [show, setShow] = useState(true);

  // Remember
  const [on, toggle] = useState(false);
  const [lastUser, setLastUser] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    setLastUser({
      email: localStorage.getItem("LastUserEmail"),
      pass: localStorage.getItem("LastUserPass"),
    });
  }, []);

  // Formik
  const [formTouched, setFormTouched] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  const [error, setError] = useState({
    email: "",
    pass: "",
    code: "",
  });

  // User
  const [userEmail, setUserEmail] = useState("innocentdev0512@gmail.com");

  return (
    <AuthLayout
      touched={formTouched}
      error={formErrors}
      authError={error.email !== "" || error.pass !== "" || error.code !== ""}
    >
      <Layout
        touched={formTouched}
        error={formErrors}
        authError={error.email !== "" || error.pass !== "" || error.code !== ""}
      >
        {show ? (
          <Flex
            $style={{
              w: "500px",
              h: "fit-content",
              fDirection: "column",
              vAlign: "center",
              queries: {
                768: {
                  w: "100%",
                },
              },
            }}
          >
            <Image src={LogoImage1} alt="No Logo" />
            <P
              $style={{
                size: "48px",
                family: "sora",
                queries: {
                  768: {
                    size: "36px",
                  },
                  425: {
                    size: "30px",
                  },
                },
              }}
            >
              Seja <Span $style={{ weight: "800" }}>Bem-vindo!</Span>
            </P>
            <P
              $style={{
                color: "#9B9B9B",
                size: "20px",
                m: "0px 0px 10px 0px",
                align: "center",
                queries: {
                  768: {
                    size: "18px",
                  },
                },
              }}
            >
              Faça login para continuar
            </P>
            <Formik
              initialValues={{
                email: localStorage.getItem("LastUserEmail")
                  ? localStorage.getItem("LastUserEmail")
                  : "",
                pass: localStorage.getItem("LastUserPass")
                  ? localStorage.getItem("LastUserPass")
                  : "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Endereço de email invalido.")
                  .required("Campo obrigatório."),
                pass: Yup.string()
                  .min(6, "A senha deve ter pelo menos 6 caracteres")
                  .required("Campo obrigatório."),
              })}
              onSubmit={(values) => {
                if (values.email !== "innocentdev0512@gmail.com") {
                  setError({ email: "Nenhum usuário encontrado.", pass: "" });
                  return;
                }
                if (values.pass !== "123123") {
                  setError({ email: "", pass: "A senha está errada." });
                  return;
                }
                if (on) {
                  localStorage.setItem("LastUserEmail", values.email);
                  localStorage.setItem("LastUserPass", values.pass);
                }
                dispatch(
                  setUser({
                    user: true,
                    name: "Gabrielo Lopes",
                    gmail: "gabrielolopes@gmail.com",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/chainedx-3ec41.appspot.com/o/user.png?alt=media&token=06e76385-92f3-4a30-9d59-b7e1bdb73aaf&_gl=1*15rppda*_ga*NDUwNDQxNDQuMTY4NTg5MzQ0Mw..*_ga_CW55HF8NVT*MTY4NjQ2MDY4MS44LjEuMTY4NjQ2MDkyMy4wLjAuMA..",
                    pixKey: "089.98.253-83",
                    pass: "123123",
                  })
                );
              }}
            >
              {({
                touched,
                errors,
                values,
                setFieldTouched,
                setFieldError,
              }) => {
                setUserEmail(values.email);
                setFormTouched(Object.keys(touched).length);
                setFormErrors(!errors.email && !errors.pass);
                return (
                  <Flex
                    $style={{
                      w: "100%",
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <InputField
                        name="email"
                        placeholder="E-mail"
                        question="E-mail"
                        image={1}
                        pass={false}
                        authError={error.email !== ""}
                      />
                      <Error show={error.email !== ""}>
                        <P
                          $style={{
                            color: "#FB1C1C",
                            family: "sora",
                            size: "14px",
                            weight: "600",
                            lH: "125%",
                          }}
                        >
                          {error.email}
                        </P>
                      </Error>
                      <InputField
                        name="pass"
                        placeholder="Senha"
                        question="Senha"
                        image={2}
                        pass={true}
                        authError={error.pass !== ""}
                      />
                      <Error show={error.pass !== ""}>
                        <P
                          $style={{
                            color: "#FB1C1C",
                            family: "sora",
                            size: "14px",
                            weight: "600",
                            lH: "125%",
                          }}
                        >
                          {error.pass}
                        </P>
                      </Error>

                      <Flex
                        $style={{
                          vAlign: "center",
                          hAlign: "space-between",
                          m: "18px 0px 0px 0px",
                        }}
                      >
                        <Flex $style={{ vAlign: "center" }}>
                          <Toggle on={on} onClick={() => toggle(!on)} />
                          <P $style={{ color: "#696969", size: "14px" }}>
                            Lembre de mim
                          </P>
                        </Flex>
                        <div
                          onClick={() => {
                            if (
                              values.email === lastUser.email ||
                              (!errors.email && touched.email)
                            ) {
                              setFormTouched(false);
                              setFormErrors(false);
                              setShow(false);
                            } else {
                              NotificationManager.error(
                                "Você tem que inserir seu e-mail.",
                                "Erro",
                                3000
                              );
                              setFieldTouched("email", true, true);
                              setFieldError("email", "Campo obrigatório.");
                            }
                          }}
                        >
                          <P
                            $style={{
                              decoration: "underline",
                              color: "#696969",
                            }}
                          >
                            Esqueceu a Senha?
                          </P>
                        </div>
                      </Flex>

                      <Submit
                        type="submit"
                        touched={Object.keys(touched).length}
                        error={!errors.email && !errors.pass}
                        authError={error.email !== "" || error.pass !== ""}
                      >
                        <P
                          $style={{
                            weight: "600",
                            size: "16px",
                            lH: "125%",
                          }}
                        >
                          ENTRAR
                        </P>
                      </Submit>
                    </Form>
                  </Flex>
                );
              }}
            </Formik>
            <P
              $style={{
                size: "18px",
                w: "100%",
                align: "center",
                m: "70px 0px 0px 0px",
              }}
            >
              Não tem uma conta?
            </P>

            <GoRegister to={"/register"}>
              <P
                $style={{
                  weight: "600",
                  size: "16px",
                  lH: "125%",
                }}
              >
                CRIAR AGORA
              </P>
            </GoRegister>
          </Flex>
        ) : (
          <Flex
            $style={{
              w: "500px",
              h: "fit-content",
              fDirection: "column",
              vAlign: "center",
              queries: {
                768: {
                  w: "100%",
                },
              },
            }}
          >
            <Image src={LogoImage1} alt="No Logo" />
            <P
              $style={{
                size: "48px",
                family: "sora",
                queries: {
                  768: {
                    size: "36px",
                  },
                  425: {
                    size: "30px",
                  },
                },
              }}
            >
              Esqueceu <Span $style={{ weight: "800" }}>a senha?</Span>
            </P>
            <P
              $style={{
                color: "#9B9B9B",
                size: "20px",
                m: "0px 0px 10px 0px",
                align: "center",
                w: "400px",
                queries: {
                  768: {
                    size: "18px",
                    w: "300px",
                  },
                },
              }}
            >
              Fique tranquilo, escolha uma das opções abaixo para redefinir a
              sua senha de maneira segura.
            </P>
            <CodeEmail>
              <MailIcon disable={true} />
              <Flex
                $style={{
                  fDirection: "column",
                  m: "0px 0px 0px 16px",
                  hAlign: "center",
                }}
              >
                <P $style={{ size: "14px", lH: "125%", color: "#696969" }}>
                  Enviar e-mail para:
                </P>
                <P $style={{ size: "20px", lH: "125%", color: "#F6BE76" }}>
                  {userEmail.charAt(0) +
                    userEmail
                      .slice(1, userEmail.indexOf("@") - 3)
                      .replace(/./g, "*") +
                    userEmail.slice(
                      userEmail.indexOf("@") - 3,
                      userEmail.indexOf("@")
                    ) +
                    userEmail.slice(userEmail.indexOf("@"))}
                </P>
              </Flex>
            </CodeEmail>
            <LineOr>
              <span>ou</span>
            </LineOr>
            <Formik
              initialValues={{
                code: "",
              }}
              validationSchema={Yup.object({
                code: Yup.string().required("Campo obrigatório."),
              })}
              onSubmit={(values) => {
                if (values.code !== "123456") {
                  setError({ code: "Código errado" });
                  return;
                }
                navigate("/forgotpass");
              }}
            >
              {({ touched, errors }) => {
                setFormTouched(Object.keys(touched).length);
                setFormErrors(!errors.code);
                return (
                  <Flex
                    $style={{
                      w: "100%",
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <InputField
                        name="code"
                        placeholder="Seu melhor e-mail"
                        question="Código"
                        image={1}
                        pass={false}
                        authError={error.code !== ""}
                      />
                      <Error show={error.code !== ""}>
                        <P
                          $style={{
                            color: "#FB1C1C",
                            family: "sora",
                            size: "14px",
                            weight: "600",
                            lH: "125%",
                          }}
                        >
                          {error.code}
                        </P>
                      </Error>

                      <Submit
                        type="submit"
                        touched={Object.keys(touched).length}
                        error={!errors.code}
                        authError={error.code !== ""}
                      >
                        <P
                          $style={{
                            weight: "600",
                            size: "16px",
                            lH: "125%",
                          }}
                        >
                          RECUPERAR SENHA
                        </P>
                      </Submit>
                    </Form>
                  </Flex>
                );
              }}
            </Formik>
          </Flex>
        )}
      </Layout>
    </AuthLayout>
  );
};

export default Register;
