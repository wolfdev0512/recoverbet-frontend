import styled from "styled-components";

//------------------------------------------------

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0px 40px 150px 40px;
  }
  @media screen and (max-width: 425px) {
    padding: 0px 0px 150px 0px;
  }
`;
export const ContentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin-top: 25px;

  width: 350px;
  height: 60px;

  background: #1daf51;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ChartContainer = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px;

  background: linear-gradient(218.38deg, #050505 -41.34%, #181818 63.06%);
  border-radius: 5px;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
`;
export const Chart = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
