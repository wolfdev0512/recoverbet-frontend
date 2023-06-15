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

function generateRandomData() {
  const plataformas = ["Exclamation", "Setting", "Check"];
  const statuses = ["Pendente", "Em processamento", "Pago"];

  const plataforma =
    plataformas[Math.floor(Math.random() * plataformas.length)];
  const date = generateRandomDate();
  const horario = generateRandomTime();
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const valor = `R$${(Math.random() * 10000).toFixed(2).replace(".", ",")}`;

  return { plataforma, date, horario, status, valor };
}

function generateRandomDate() {
  const year = Math.floor(Math.random() * (2030 - 2020 + 1) + 2020);
  const month = Math.floor(Math.random() * 12 + 1);
  const day = Math.floor(Math.random() * 28 + 1);

  return `${day < 10 ? "0" : ""}${day} de ${getMonthName(month)}, ${year}`;
}

function getMonthName(month) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return months[month - 1];
}

function generateRandomTime() {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);

  return `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}h`;
}

//-------------------------------------------------------
const Withdrawal = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (let i = 0; i < 5; i++) {
      const newData = generateRandomData();
      tempData.push(newData);
    }

    console.log(tempData);
    setTableData(tempData);
  }, []);

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
      data: tableData,
      count: tableData.length,
      limit: 10,
      page: 0,
      total: tableData.length,
    };
    if (limit !== status.limit) setStatus({ ...status, limit });
    if (status.data !== newStatus.data) {
      setStatus({ ...newStatus });
    }
  };

  const fields = [
    {
      key: "plataforma",
      label: "plataforma",
      render: (v, i) => <Icon icon={v} />,
    },
    { key: "horario", label: "Horario", render: (v, i) => <span>{v}</span> },
    { key: "date", label: "Data", render: (v, i) => <span>{v}</span> },
    { key: "status", label: "Status", render: (v, i) => <span>{v}</span> },
    { key: "valor", label: "Valor", render: (v, i) => <span>{v}</span> },
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
