import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },

        { path: "about", element: <AboutPage /> },
        { path: "desci", element: <Desci /> },
        { path: "ethereum", element: <Ethereum /> },
        { path: "partners", element: <Partners /> },
        { path: "faq", element: <FAQ /> },

        { path: "net", element: <NetPage /> },
        { path: "microbes", element: <Microbes /> },
        { path: "dna", element: <DNA /> },
        { path: "cosmos", element: <Cosmos /> },

        { path: "community", element: <CommunityPage /> },
        { path: "socials", element: <Socials /> },
        { path: "researchCommunity", element: <ResearchCommunity /> },
        { path: "artisticCommunity", element: <ArtisticCommunity /> },
        { path: "desciDAO", element: <DesciDAO /> },

        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const AboutPage = Loadable(lazy(() => import("../pages/About")));
const NetPage = Loadable(lazy(() => import("../pages/Net")));
const CommunityPage = Loadable(lazy(() => import("../pages/Community")));

const Desci = Loadable(lazy(() => import("../pages/about/Desci")));
const Ethereum = Loadable(lazy(() => import("../pages/about/Ethereum")));
const Partners = Loadable(lazy(() => import("../pages/about/Partners")));
const FAQ = Loadable(lazy(() => import("../pages/about/FAQ")));

const Microbes = Loadable(lazy(() => import("../pages/net/Microbes")));
const DNA = Loadable(lazy(() => import("../pages/net/DNA")));
const Cosmos = Loadable(lazy(() => import("../pages/net/Cosmos")));

const Socials = Loadable(lazy(() => import("../pages/community/Socials")));
const ResearchCommunity = Loadable(
  lazy(() => import("../pages/community/ResearchCommunity"))
);
const ArtisticCommunity = Loadable(
  lazy(() => import("../pages/community/ArtisticCommunity"))
);
const DesciDAO = Loadable(lazy(() => import("../pages/community/DesciDAO")));

const Contact = Loadable(lazy(() => import("../pages/Contact")));

const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
