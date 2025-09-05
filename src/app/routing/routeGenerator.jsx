import { Route } from "react-router-dom";
import RouteRenderer from "../components/RouteRenderer";

// Recursive function to generate routes from configuration
export const generateRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.children) {
      // Route with children (nested routes)
      return (
        <Route
          key={`${route.path}-${index}`}
          path={route.path}
          element={<RouteRenderer route={route} />}
        >
          {generateRoutes(route.children)}
        </Route>
      );
    } else {
      // Simple route
      return (
        <Route
          key={`${route.path}-${index}`}
          path={route.path}
          element={<RouteRenderer route={route} />}
        />
      );
    }
  });
};

// Helper function to flatten routes for easier navigation
export const flattenRoutes = (routes, parentPath = "") => {
  const flattened = [];

  routes.forEach((route) => {
    const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path;

    if (route.children) {
      flattened.push(...flattenRoutes(route.children, fullPath));
    } else {
      flattened.push({
        ...route,
        fullPath,
      });
    }
  });

  return flattened;
};
