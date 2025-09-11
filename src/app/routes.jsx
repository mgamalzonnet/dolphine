import { lazy } from "react";
import { Route } from "react-router-dom";
import RouteView from "./components/RouteRenderer";

// Lazy imports
const HomePage = lazy(() => import("@/features/home"));
const LessonsSchedule = lazy(() => import("@/features/lessons"));
const Packages = lazy(() => import("@/features/packages"));
const LessonContentPage = lazy(() => import("@/features/lessons/pages/LessonContentPage"));
const ManageSubscription = lazy(() => import("@/features/subscription"));
const PackageContent = lazy(() => import("@/features/packages/pages/PackagesContent"));
const Board = lazy(() => import("@/features/Board"));
const LessonExercise = lazy(() => import("@/features/lessons/pages/LessonExercise"));
const ShowLessons = lazy(() => import("@/features/packages/pages/ShowLessons"));

// Auth pages
const LoginPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.LoginPage })));
const PhonePage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.PhonePage })));
const OtpPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.OtpPage })));
const RegisterPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.RegisterPage })));
const PasswordPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.PasswordPage })));
const ForgotPasswordOtpPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.ForgotPasswordOtpPage })));
const ForgotPasswordResetPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.ForgotPasswordResetPage })));
const ForgotPasswordPage = lazy(() => import("@/features/auth/pages").then(m => ({ default: m.ForgotPasswordPage })));

export const routes = [
  { path: "/", element: HomePage, public: true, layout: false },
  { path: "/login", element: LoginPage, public: true, layout: false },
  {
    path: "/auth",
    children: [
      { path: "phone", element: PhonePage, public: true, layout: false },
      { path: "otp", element: OtpPage, public: true, layout: false },
      { path: "register", element: RegisterPage, public: true, layout: false },
      { path: "password", element: PasswordPage, public: true, layout: false },
      { path: "forgetpassword", element: ForgotPasswordPage, public: true, layout: false },
      { path: "forgetpassword/otp", element: ForgotPasswordOtpPage, public: true, layout: false },
      { path: "forgetpassword/reset", element: ForgotPasswordResetPage, public: true, layout: false },
    ],
  },
  { path: "/schedule", element: LessonsSchedule, protected: true },
  { path: "/subscriptions", element: Packages, protected: true },
  { path: "/manage-subscription", element: ManageSubscription, protected: true, layout: false },
  { path: "/main-packages", element: Packages, protected: true, layout: false },
  { path: "/checkout", element: lazy(() => import("@/features/packages/pages/Checkout")), protected: true, layout: false },
  { path: "/packages-content", element: PackageContent, protected: true },
  { path: "/board", element: Board, protected: true },
  {
    path: "/schedule",
    children: [
      { path: "lessoncontent", element: LessonContentPage, protected: true, layout: false },
      { path: "exercise", element: LessonExercise, protected: true },
    ],
  },
  { path: "/show-lessons", element: ShowLessons, protected: true },
];

export const generateRoutes = (routes) =>
  routes.map((route, index) =>
    route.children ? (
      <Route key={`${route.path}-${index}`} path={route.path} element={<RouteView route={route} />}>
        {generateRoutes(route.children)}
      </Route>
    ) : (
      <Route key={`${route.path}-${index}`} path={route.path} element={<RouteView route={route} />} />
    )
  );

export const flattenRoutes = (routes, parentPath = "") => {
  const flattened = [];
  routes.forEach((route) => {
    const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path;
    if (route.children) {
      flattened.push(...flattenRoutes(route.children, fullPath));
    } else {
      flattened.push({ ...route, fullPath });
    }
  });
  return flattened;
};

export const isPublicRoute = (path) =>
  routes.some((route) => {
    if (route.path === path) return route.public;
    if (route.children) return route.children.some((child) => `${route.path}/${child.path}` === path && child.public);
    return false;
  });

export const requiresLayout = (path) =>
  routes.some((route) => {
    if (route.path === path) return route.layout !== false;
    if (route.children) return route.children.some((child) => `${route.path}/${child.path}` === path && child.layout !== false);
    return false;
  });


