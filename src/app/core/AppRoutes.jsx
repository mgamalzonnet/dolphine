import { Routes, Route, Navigate } from "react-router-dom";
import { useAppInitialization } from "@/hooks/useAppInitialization";
import { routes } from "../routing/routeConfig";
import { generateRoutes } from "../routing/routeGenerator";

const AppRoutes = () => {
  useAppInitialization();

  return (
    <Routes>
      {generateRoutes(routes)}

      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
