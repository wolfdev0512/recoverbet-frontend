import React, { useState } from "react";

// layout
import AuthLayout from "components/Layouts/AuthLayout";

// component
import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";

import InputField from "components/Field/Input";
import CheckBoxField from "components/Field/checkBox";

// styled
import { Layout, Image, Button, Submit } from "./styled";

// image
import LogoImage1 from "assets/images/logo_1.png";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Redux
import { setUser } from "redux/features/userSlice";
import { useDispatch } from "react-redux";

//------------------------------------------------------
const Register = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const [formTouched, setFormTouched] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  return (
    <AuthLayout touched={formTouched} error={formErrors} authError={false}>
      <Layout touched={formTouched} error={formErrors} authError={false}>
        {show ? (
          <Flex
            $style={{
              w: "100%",
              h: "fit-content",
              fDirection: "column",
              vAlign: "center",
            }}
          >
            <Image src={LogoImage1} alt="No Logo" />
            <P
              $style={{
                size: "48px",
                weight: "800",
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
              Olá, seja bem-vindo
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
              Vamos começar, preencha para se registrar
            </P>
            <Formik
              initialValues={{
                name: "",
                email: "",
                reEmail: "",
                pass: "",
                rePass: "",
                acceptedTerms: false,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Campo obrigatório."),
                email: Yup.string()
                  .email("Endereço de email invalido.")
                  .required("Campo obrigatório."),
                reEmail: Yup.string()
                  .oneOf([Yup.ref("email")], "Os e-mails não correspondem")
                  .email("Endereço de email invalido.")
                  .required("Campo obrigatório."),
                pass: Yup.string()
                  .min(6, "A senha deve ter pelo menos 6 caracteres")
                  .required("Campo obrigatório."),
                rePass: Yup.string()
                  .oneOf([Yup.ref("pass")], "As senhas não correspondem")
                  .min(6, "A senha deve ter pelo menos 6 caracteres")
                  .required("Campo obrigatório."),
                acceptedTerms: Yup.boolean().oneOf(
                  [true],
                  "Você deve aceitar os Termos e Condições."
                ),
              })}
              onSubmit={(values) => {
                setShow(false);
                setFormTouched(false);
                setFormErrors(false);
              }}
            >
              {({ touched, errors }) => {
                setFormTouched(Object.keys(touched).length);
                setFormErrors(
                  !errors.name &&
                    !errors.email &&
                    !errors.reEmail &&
                    !errors.pass &&
                    !errors.rePass &&
                    !errors.acceptedTerms
                );
                return (
                  <Flex
                    $style={{
                      w: "500px",
                      queries: {
                        768: {
                          w: "100%",
                        },
                      },
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <InputField
                        name="name"
                        placeholder="Qual o seu nome?"
                        question="Qual seu nome?"
                        image={0}
                        pass={false}
                      />
                      <InputField
                        name="email"
                        placeholder="Seu endereço de e-mail"
                        question="E-mail"
                        image={1}
                        pass={false}
                      />
                      <InputField
                        name="reEmail"
                        placeholder="Confirme seu e-mail"
                        question="E-mail"
                        image={1}
                        pass={false}
                      />
                      <InputField
                        name="pass"
                        placeholder="Criar senha"
                        question="Senha"
                        image={2}
                        pass={true}
                      />

                      <InputField
                        name="rePass"
                        placeholder="Confirmar senha"
                        question="Senha"
                        image={2}
                        pass={true}
                      />

                      <CheckBoxField
                        name="acceptedTerms"
                        text="Li e aceito os Termos e Compromissos"
                      />
                      <Submit
                        type="submit"
                        touched={Object.keys(touched).length}
                        error={
                          !errors.name &&
                          !errors.email &&
                          !errors.reEmail &&
                          !errors.pass &&
                          !errors.rePass &&
                          !errors.acceptedTerms
                        }
                      >
                        <P
                          $style={{
                            weight: "600",
                            size: "16px",
                            lH: "125%",
                          }}
                        >
                          CRIAR CONTA
                        </P>
                      </Submit>
                    </Form>
                  </Flex>
                );
              }}
            </Formik>
          </Flex>
        ) : (
          <Flex
            $style={{
              w: "100%",
              h: "100%",
              fDirection: "column",
              vAlign: "center",
              hAlign: "center",
            }}
          >
            <Image src={LogoImage1} alt="No Logo" />
            <P
              $style={{
                family: "sora",
                size: "42px",
                weight: "800",
                lH: "125%",
                m: "0px 0px 10px 0px",
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
              Conta criada! 🥳🎉
            </P>
            <P
              $style={{
                size: "20px",
                weight: "800",
                queries: {
                  768: {
                    size: "18px",
                  },
                },
              }}
            >
              Seu perfil foi criado com Sucesso.
            </P>
            <P
              $style={{
                w: "400px",
                size: "20px",
                weight: "500",
                align: "center",
                queries: {
                  768: {
                    size: "18px",
                    w: "300px",
                  },
                },
              }}
            >
              Enviamos um e-mail para sua caixa de entrada confirmando o
              registro da conta.
            </P>
            <Button
              type="submit"
              onClick={() => {
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
              <P
                $style={{
                  weight: "600",
                  size: "16px",
                  lH: "125%",
                  color: "#FFFFFF",
                }}
              >
                VOLTAR
              </P>
            </Button>
          </Flex>
        )}
      </Layout>
    </AuthLayout>
  );
};

export default Register;
