// import { useLanguageDirection } from "@/hooks/useLanguageDirection";

// // App Components
// import AppProviders from "./AppProviders";
// import AppRoutes from "./AppRoutes";

// // Global Components
// import GlobalLoader from "@/components/feedback/GlobalLoader";
// import ModalManager from "@/components/feedback/modal/ModalManager";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { routes } from "../routing/routeConfig";
// import { generateRoutes } from "../routing/routeGenerator";
// import { useModal } from "@/components/feedback/modal/useModal";

const App = () => {
  // Initialize language direction
  // useLanguageDirection();

  // Modal hook for examples
  // const {
  //   openBuyPackageModal,
  //   openDetailsModal,
  //   openConfirmModal,
  //   openChangeGroupModal,
  //   openReactivateModal,
  //   openExtendPackageModal,
  // } = useModal();

  return (
    <BrowserRouter>
      <Routes>
        {/* Generated Routes from Configuration */}
        {/* {generateRoutes(routes)} */}

        {/* Catch-all Route - Redirect to Home */}
        <Route path="*" element={ <div> hello</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
