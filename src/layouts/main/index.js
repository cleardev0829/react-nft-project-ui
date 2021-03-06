import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import { Box } from "@material-ui/core";

export default function MainLayout() {
  const scrollY = useSelector(({ active }) => active.scrollY);

  return (
    <div>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <MainFooter />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          bottom: "1%",
          position: "fixed",
        }}
      >
        {scrollY > 100 && (
          <img
            width="64"
            height="64"
            src="/static/nft/DESCI_up_arrow-02.png"
            alt=""
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        )}
      </Box>
    </div>
  );
}
