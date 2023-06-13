import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import Flex from "components/Base/Flex";

import ModalLayout from "components/Layouts/ModalLayout";

import ImageUser from "assets/images/user.png";

import ImageUploader from "react-image-upload";
import ImageUpload from "assets/images/upload.png";
import { P } from "components/Base/Text";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import useModal from "hook/useModal";
import InputField from "components/Field/Input";
import { Button } from "components/Layouts/DashLayout/styled";
import DashLayout from "components/Layouts/DashLayout";

const DataPage = (props) => {
  const navigate = useNavigate();
  const userModal = useModal();

  function getImageFileObject(imageFile) {
    console.log({ onAdd: imageFile });
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file });
  }

  const loginUser = useSelector((state) => state.user);

  return (
    <DashLayout>
      <ModalLayout
        show={true}
        closeModal={() => {
          console.log("sdf");
          navigate("/dash");
        }}
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
    </DashLayout>
  );
};

export default DataPage;
