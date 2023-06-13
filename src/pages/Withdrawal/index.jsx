import React, { useState } from "react";

// Layout
// import DashLayout from "components/Layouts/DashLayout";

// Platform
import Platform from "components/Platform";

// Icon
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// styled
import {
  Container,
  Menu,
  MenuItem,
  TableContainer,
  Table,
  Item,
} from "./styled";

// components
import Flex from "components/Base/Flex";
import { P } from "components/Base/Text";

// Image
import ImageLogo from "assets/images/logo_3.png";

//-------------------------------------------------------
const Withdrawal = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Platform data={true} />
      <Container>
        <Menu>
          <MenuItem active={active === 0} onClick={() => setActive(0)}>
            Todos
          </MenuItem>
          <MenuItem active={active === 1} onClick={() => setActive(1)}>
            Pago
          </MenuItem>
          <MenuItem active={active === 2} onClick={() => setActive(2)}>
            Pendente
          </MenuItem>
          <MenuItem active={active === 3} onClick={() => setActive(3)}>
            Em processamento
          </MenuItem>
        </Menu>
        <TableContainer>
          <Table>
            <tr>
              <th>Platafoma</th>
              <th>horario</th>
              <th>Data</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>
            <tr>
              <td>
                <Flex $style={{ vAlign: "center" }}>
                  <img src={ImageLogo} alt="No logo" />
                  <P
                    $style={{
                      weight: "700",
                      size: "16px",
                      m: "0px 0px 0px 10px",
                    }}
                  >
                    Recovery Bet
                  </P>
                </Flex>
              </td>
              <td>14:47h</td>
              <td>06 de Junho, 2023</td>
              <td>Pago</td>
              <td>R$8.375,20</td>
            </tr>
            <tr>
              <td>
                <Flex $style={{ vAlign: "center" }}>
                  <img src={ImageLogo} alt="No logo" />
                  <P
                    $style={{
                      weight: "700",
                      size: "16px",
                      m: "0px 0px 0px 10px",
                    }}
                  >
                    Recovery Bet
                  </P>
                </Flex>
              </td>
              <td>14:47h</td>
              <td>06 de Junho, 2023</td>
              <td>Pago</td>
              <td>R$8.375,20</td>
            </tr>
            <tr>
              <td>
                <Flex $style={{ vAlign: "center" }}>
                  <img src={ImageLogo} alt="No logo" />
                  <P
                    $style={{
                      weight: "700",
                      size: "16px",
                      m: "0px 0px 0px 10px",
                    }}
                  >
                    Recovery Bet
                  </P>
                </Flex>
              </td>
              <td>14:47h</td>
              <td>06 de Junho, 2023</td>
              <td>Pago</td>
              <td>R$8.375,20</td>
            </tr>
            <tr>
              <td>
                <Flex $style={{ vAlign: "center" }}>
                  <img src={ImageLogo} alt="No logo" />
                  <P
                    $style={{
                      weight: "700",
                      size: "16px",
                      m: "0px 0px 0px 10px",
                    }}
                  >
                    Recovery Bet
                  </P>
                </Flex>
              </td>
              <td>14:47h</td>
              <td>06 de Junho, 2023</td>
              <td>Pago</td>
              <td>R$8.375,20</td>
            </tr>
            <tr>
              <td>
                <Flex $style={{ vAlign: "center" }}>
                  <img src={ImageLogo} alt="No logo" />
                  <P
                    $style={{
                      weight: "700",
                      size: "16px",
                      m: "0px 0px 0px 10px",
                    }}
                  >
                    Recovery Bet
                  </P>
                </Flex>
              </td>
              <td>14:47h</td>
              <td>06 de Junho, 2023</td>
              <td>Pago</td>
              <td>R$8.375,20</td>
            </tr>
          </Table>
          <Flex
            $style={{ m: "20px 0px 0px 0px", gap: "50px", color: "#292929" }}
          >
            <Item>
              <AiOutlineArrowLeft />
            </Item>
            <Flex $style={{ gap: "4px" }}>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
              <Item>...</Item>
              <Item>10</Item>
            </Flex>
            <Item>
              <AiOutlineArrowRight />
            </Item>
          </Flex>
        </TableContainer>
      </Container>
    </>
  );
};

export default Withdrawal;
