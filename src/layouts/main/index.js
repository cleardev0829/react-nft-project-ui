import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import { Box } from "@material-ui/core";

export default function MainLayout() {
  return (
    <>
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
        <img
          width="64"
          height="64"
          src="https://drive.google.com/uc?id=1SIbdWXOhLv-ne6xA_Z7vzxMvqNnthFYV"
          data-src="https://drive.google.com/uc?id=1SIbdWXOhLv-ne6xA_Z7vzxMvqNnthFYV"
          alt=""
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </Box>
    </>
  );
}
