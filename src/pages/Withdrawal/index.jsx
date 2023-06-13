import React, { useState } from "react";

// Layout
import DashLayout from "components/Layouts/DashLayout";

// Platform
import Platform from "components/Platform";

// Icon
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// styled
import { Container, Menu, MenuItem } from "./styled";

// components

// Image
// import ImageLogo from "assets/images/logo_3.png";
import Icon from "components/Icon";
import Table from "components/Table";

//-------------------------------------------------------
const Withdrawal = () => {
  const [active, setActive] = useState(0);
  const [status, setStatus] = React.useState({
    data: [],
    count: 0,
    limit: 10,
    page: 0,
    total: 0,
  });

  const onData = (page, limit) => {
    const mockdata = [
      {
        platafoma: "Check",
        horario: "14:47h",
        date: "06 de Junho, 2023",
        status: "Pago",
        valar: "R$8.375,20",
      },
      {
        platafoma: "Exclamation",
        horario: "14:47h",
        date: "06 de Junho, 2023",
        status: "Pago",
        valar: "R$8.375,20",
      },
      {
        platafoma: "Setting",
        horario: "14:47h",
        date: "06 de Junho, 2023",
        status: "Pago",
        valar: "R$8.375,20",
      },
      {
        platafoma: "Logo",
        horario: "14:47h",
        date: "06 de Junho, 2023",
        status: "Pago",
        valar: "R$8.375,20",
      },
      {
        platafoma: "Logo",
        horario: "14:47h",
        date: "06 de Junho, 2023",
        status: "Pago",
        valar: "R$8.375,20",
      },
    ];
    if (limit !== status.limit) setStatus({ ...status, limit });
    setStatus({
      data: mockdata,
      count: mockdata.length,
      limit: 10,
      page: 0,
      total: mockdata.length,
    });
  };

  const fields = [
    {
      key: "platafoma",
      label: "Platafoma",
      render: (v, i) => <Icon icon={v} />,
    },
    { key: "horario", label: "Horario", render: (v, i) => <span>{v}</span> },
    { key: "date", label: "Data", render: (v, i) => <span>{v}</span> },
    { key: "status", label: "Status", render: (v, i) => <span>{v}</span> },
    { key: "valar", label: "Valor", render: (v, i) => <span>{v}</span> },
  ];

  return (
    <DashLayout>
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

        <Table
          header={
            <div>
              Showing {status.count} Token Contracts (From a total of{" "}
              {status.total} Token Contracts)
            </div>
          }
          page={status.page}
          total={status.total}
          fields={fields}
          data={status.data}
          onData={onData}
        />
        {/* <TableContainer>
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
        </TableContainer> */}
      </Container>
    </DashLayout>
  );
};

export default Withdrawal;
