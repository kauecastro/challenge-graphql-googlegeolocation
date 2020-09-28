import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import MainLayout from "./layouts/MainLayout/index";
import { Provider } from "react-redux";
import store from "./store/index";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./services/graphql/config";
import theme from "@Common/theme";
export interface HelloWorldProps {
  name: string;
}

const App = (props: HelloWorldProps) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Router>
              <Routes />
            </Router>
          </MainLayout>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
