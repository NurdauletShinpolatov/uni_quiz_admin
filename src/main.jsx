import "./scss/global.scss";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { persistor, store } from "./store/store";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
				<ChakraProvider>
          <Router />
        </ChakraProvider>
    </PersistGate>
  </Provider>
);
