import { Suspense } from "react";
import { AppLayout } from "@/components/layout";
import withAuth from "@/features/auth/hoc/withAuth";
import { Overlay, Spinner } from "@/components/feedback";

// Simple loading fallback component
const RouteLoadingFallback = () => (
  <Overlay ariaLabel="Loading page">
    <Spinner size={48} colorClass="border-orange-500" />
  </Overlay>
);

const RouteRenderer = ({ route, children }) => {
  const Component = route.element;

  if (!Component) {
    return children;
  }

  // For protected routes, wrap with authentication HOC
  const ProtectedComponent = route.protected ? withAuth(Component) : Component;

  // Use layout flag to determine if AppLayout should be applied
  const shouldUseLayout = route.layout !== false; // Default true unless explicitly false

  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      {shouldUseLayout ? (
        <AppLayout>
          <ProtectedComponent />
          {children && children} {/* 👈 نخلي الـ nested routes يظهروا منفصلين */}
        </AppLayout>
      ) : (
        <>
          <ProtectedComponent />
          {children && children}
        </>
      )}
    </Suspense>
  );
};

export default RouteRenderer;
