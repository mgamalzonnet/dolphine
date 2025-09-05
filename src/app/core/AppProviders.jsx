import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Local imports
import store from "@/store";
import i18n from "@/i18n";

const AppProviders = ({ children }) => (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </I18nextProvider>
    </ReduxProvider>
  </BrowserRouter>
);

export default AppProviders;
