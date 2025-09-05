import { useLanguageDirection } from "@/hooks/useLanguageDirection";

// App Components
import AppProviders from "./AppProviders";
import AppRoutes from "./AppRoutes";

// Global Components
import GlobalLoader from "@/components/feedback/GlobalLoader";
import ModalManager from "@/components/feedback/modal/ModalManager";
// import { useModal } from "@/components/feedback/modal/useModal";

const App = () => {
  // Initialize language direction
  useLanguageDirection();


  return (
    <>
    {/* <AppProviders> */}
        {/* Global Components */}
        <GlobalLoader />
        <ModalManager />

        <AppRoutes />
     {/* </AppProviders> */}
    </>
  );
};

export default App;
