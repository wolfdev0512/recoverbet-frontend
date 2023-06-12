import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

// Page
import Loading from "components/Loading";

// Redux
import { store } from "redux/store";
import { Provider } from "react-redux";

// Notification
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//---------------------------------------------------------------
function AppLayout() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Suspense fallback={Loading}>
      <Provider store={store}>
        <Outlet />
      </Provider>
      <NotificationContainer />
    </Suspense>
  );
}

export default AppLayout;
