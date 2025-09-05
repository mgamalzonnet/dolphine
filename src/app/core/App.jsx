import { useLanguageDirection } from "@/hooks/useLanguageDirection";

// App Components
import AppProviders from "./AppProviders";
import RoutesManager  from "./AppRoutes";

// Global Components
import GlobalLoader from "@/components/feedback/GlobalLoader";
import ModalManager from "@/components/feedback/modal/ModalManager";
// import { useModal } from "@/components/feedback/modal/useModal";

const App = () => {
  // Initialize language direction
  useLanguageDirection();


  return (
    <AppProviders>
      <div className="app-container">
        {/* Global Components */}
        <GlobalLoader />
        <ModalManager />

        <RoutesManager  />
      </div>
    </AppProviders>
  );
};

export default App;
