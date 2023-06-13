import React from "react";

// Layout
import { Layout, ModalContainer, CloseButton, Container } from "./styled";

// image
import { AiOutlineCloseCircle } from "react-icons/ai";

//--------------------------------------------------
const ModalLayout = (props) => {
  return (
    <Layout show={props.show}>
      <ModalContainer width={props.width} height={props.height}>
        <CloseButton>
          <AiOutlineCloseCircle size={24} onClick={() => props.closeModal()} />
        </CloseButton>
        <Container>{props.children}</Container>
      </ModalContainer>
    </Layout>
  );
};

export default ModalLayout;
