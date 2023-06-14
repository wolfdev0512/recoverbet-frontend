import styled from "styled-components";

//------------------------------------------------------

export const Container = styled.div`
  width: 100%;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
`;
export const Menu = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (max-width: 425px) {
    gap: 6px;
  }
`;
export const MenuItem = styled.div`
  padding: 8px;

  color: ${(props) => (props.active ? "#F6BE76" : "#696969")};
  font-family: "Poppins";
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  ${(props) => (props.active ? "border-bottom:2px solid #F6BE76" : "")};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
export const TableContainer = styled.div`
  margin-top: 25px;

  width: 100%;
  height: fit-content;

  min-height: 100%;

  padding: 40px 80px;

  background: linear-gradient(218.38deg, #050505 -41.34%, #181818 63.06%);
  border-radius: 5px 5px 5px 7px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 9px;
  gap: 10px;

  width: 38px;
  height: 39px;

  background: #292929;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
