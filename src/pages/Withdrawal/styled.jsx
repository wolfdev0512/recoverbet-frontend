import styled from "styled-components";

//------------------------------------------------------

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
`;
export const Menu = styled.div`
  display: flex;
  gap: 20px;
`;
export const MenuItem = styled.div`
  padding: 8px;

  color: ${(props) => (props.active ? "#F6BE76" : "#696969")};
  font-family: "Poppins";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  ${(props) => (props.active ? "border-bottom:2px solid #F6BE76" : "")};
`;
export const TableContainer = styled.div`
  margin-top: 25px;

  width: 100%;
  height: 450px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }

  padding: 40px 80px;

  background: linear-gradient(218.38deg, #050505 -41.34%, #181818 63.06%);
  border-radius: 5px 5px 5px 7px;

  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr,
  th,
  td {
    border-bottom: 2px solid rgba(65, 65, 65, 0.35);
  }

  th {
    height: 64px;
  }
  td {
    height: 50px;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
    }
  }

  td:first-child,
  th:first-child {
    text-align: left;
  }
  td:last-child,
  th:last-child {
    text-align: right;
  }
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
