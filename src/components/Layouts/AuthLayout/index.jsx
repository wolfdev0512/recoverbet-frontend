import React from "react";

// styled
import { Layout, Effect } from "./styled";

//---------------------------------------------------------
const AuthLayout = ({ touched, error, authError, children }) => {
  return (
    <Layout>
      <Effect touched={touched} error={error} authError={authError} />
      {children}
    </Layout>
  );
};

export default AuthLayout;
