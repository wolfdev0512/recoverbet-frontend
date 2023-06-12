import React, { useState } from "react";

// layout
import AuthLayout from "components/Layouts/AuthLayout";

// component
import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";
import InputField from "components/Field/Input";

// styled
import { Layout, Image, Submit, Button } from "./styled";

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
  // Redux
  const dispatch = useDispatch();

  // Forgot
  const [show, setShow] = useState(true);

  // Formik
  const [formTouched, setFormTouched] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  return (
    <AuthLayout touched={formTouched} error={formErrors} authError={false}>
      <Layout touched={formTouched} error={formErrors} authError={false}>
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
              Redefinir senha
            </P>
            <P
              $style={{
                color: "#9B9B9B",
                size: "20px",
                m: "0px 0px 50px 0px",
                align: "center",
                queries: {
                  768: {
                    size: "18px",
                  },
                },
              }}
            >
              Fique tranquilo! Você está quase lá.
            </P>
            <Formik
              initialValues={{
                pass: "",
                rePass: "",
              }}
              validationSchema={Yup.object({
                pass: Yup.string()
                  .min(6, "A senha deve ter pelo menos 6 caracteres")
                  .required("Campo obrigatório."),
                rePass: Yup.string()
                  .oneOf([Yup.ref("pass")], "As senhas não correspondem")
                  .min(6, "A senha deve ter pelo menos 6 caracteres")
                  .required("Campo obrigatório."),
              })}
              onSubmit={(values) => {
                setShow(false);
                setFormTouched(false);
                setFormErrors(false);
              }}
            >
              {({ touched, errors }) => {
                setFormTouched(Object.keys(touched).length);
                setFormErrors(!errors.pass && !errors.rePass);
                return (
                  <Flex
                    $style={{
                      w: "100%",
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <InputField
                        name="pass"
                        placeholder="Senha"
                        question="Senha"
                        image={2}
                        pass={true}
                      />
                      <InputField
                        name="rePass"
                        placeholder="Senha"
                        question="Senha"
                        image={2}
                        pass={true}
                      />

                      <Submit
                        type="submit"
                        touched={Object.keys(touched).length}
                        error={!errors.email && !errors.pass}
                      >
                        <P
                          $style={{
                            weight: "600",
                            size: "16px",
                            lH: "125%",
                          }}
                        >
                          CONFIRMAR ALTERAÇÃO
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
                align: "center",
                queries: {
                  768: {
                    size: "36px",
                  },
                  425: {
                    w: "250px",
                    size: "30px",
                  },
                },
              }}
            >
              Senha redefinida! 🥳🎉
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
              Sua senha foi redefinida com Sucesso.
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
              Faça login novamente para continuar!
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
                  queries: {
                    768: {
                      size: "14px",
                    },
                  },
                }}
              >
                VOLTAR PARA PÁGINA INICIAL
              </P>
            </Button>
          </Flex>
        )}
      </Layout>
    </AuthLayout>
  );
};

export default Register;
