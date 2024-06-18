import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";
import Loadable from "react-loadable";

const LoadableAppComponent = Loadable({
  loader: () => import("./App"),
  loading: () => <></>,
});
const LoadableHomeComponent = Loadable({
  loader: () => import("./home"),
  loading: () => <></>,
});
const LoadableNavComponent = Loadable({
  loader: () => import("./Nav"),
  loading: () => <></>,
});

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const NavCom = () => <LoadableNavComponent />;

const AppCom = () => <LoadableAppComponent />;
const HomeCom = () => <LoadableHomeComponent />;

root.render(
  <HashRouter>
    <Provider>
      <Routes>
        <Route
          path="/"
          element={
            <Provider>
              <NavCom />
            </Provider>
          }
        ></Route>
        <Route
          path="/app"
          element={
            <Provider key="/app">
              <AppCom />
            </Provider>
          }
        />
        <Route
          path="/home"
          element={
            <Provider>
              <HomeCom />
            </Provider>
          }
        />
        {/* 👈 Renders at /#/app/ */}
      </Routes>
    </Provider>
  </HashRouter>
);
