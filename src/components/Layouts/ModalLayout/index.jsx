import React from "react";

// Layout
import { Layout, Container, CloseButton } from "./styled";

// image
import { AiOutlineCloseCircle } from "react-icons/ai";

//--------------------------------------------------
const ModalLayout = (props) => {
  return (
    <Layout show={props.show}>
      <Container width={props.width} height={props.height}>
        <CloseButton>
          <AiOutlineCloseCircle size={24} onClick={() => props.closeModal()} />
        </CloseButton>
        {props.children}
      </Container>
    </Layout>
  );
};

export default ModalLayout;
