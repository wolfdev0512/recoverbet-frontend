import React, { useEffect, useState } from "react";

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

const mockdata = [
  {
    platafoma: "Check",
    horario: "10:22h",
    date: "06 de Junho, 2023",
    status: "Pago",
    valar: "R$8.375,20",
  },
  {
    platafoma: "Exclamation",
    horario: "22:27h",
    date: "06 de Junho, 2023",
    status: "Pendente",
    valar: "R$8.375,20",
  },
  {
    platafoma: "Setting",
    horario: "05:47h",
    date: "05 de Junho, 2023",
    status: "Pendente",
    valar: "R$8.375,20",
  },
  {
    platafoma: "Logo",
    horario: "09:55h",
    date: "05 de Junho, 2023",
    status: "Em processamento",
    valar: "R$8.375,20",
  },
  {
    platafoma: "Logo",
    horario: "18:08h",
    date: "04 de Junho, 2023",
    status: "Em processamento",
    valar: "R$8.375,20",
  },
];

//-------------------------------------------------------
const Withdrawal = () => {
  const [active, setActive] = useState(0);
  const [status, setStatus] = React.useState({
    data: [],
    count: 0,
    limit: 5,
    page: 0,
    total: 0,
  });

  const onData = (page, limit) => {
    const newStatus = {
      data: mockdata,
      count: mockdata.length,
      limit: 10,
      page: 0,
      total: mockdata.length,
    };
    if (limit !== status.limit) setStatus({ ...status, limit });
    if (status.data !== newStatus.data) {
      setStatus({ ...newStatus });
    }
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
          limit={status.limit}
          onData={onData}
        />
      </Container>
    </DashLayout>
  );
};

export default Withdrawal;
