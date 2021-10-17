import { useState } from "react";
import PropTypes from "prop-types";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, useTheme } from "@material-ui/core";
import "./styles.css";

ImageMagnifier.propTypes = {
  src: PropTypes.string,
  underSrc: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  magnifierHeight: PropTypes.number,
  magnifierWidth: PropTypes.number,
  zoomLevel: PropTypes.number,
};

const MagnifierStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    visibility: "hidden",
  },
}));

export default function ImageMagnifier({
  src,
  underSrc,
  width,
  height,
  magnifierHeight = 300,
  magnifierWidth = 300,
  zoomLevel = 1,
}) {
  const theme = useTheme();

  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: height,
          width: width,
        }}
      >
        <img
          src={src}
          style={{
            height: height,
            width: width,
            [theme.breakpoints.down("md")]: {
              backgroundColor: 0,
            },
          }}
          onMouseEnter={(e) => {
            // update image size and turn-on magnifier
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            // calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // close magnifier
            setShowMagnifier(false);
          }}
          alt={"img"}
        />

        <MagnifierStyle>
          <div
            id="magnifier-img"
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",

              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier

              height: `${magnifierHeight}px`,
              width: `${magnifierWidth}px`,

              // move element center to cursor pos
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifierWidth / 2}px`,
              opacity: "1", // reduce opacity so you can verify position
              //   border: "1px solid lightgray",
              backgroundColor: "black",
              backgroundImage: `url('${underSrc}')`,
              backgroundRepeat: "no-repeat",

              //calculate zoomed image size
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,

              //calculate position of zoomed image.
              backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,

              borderRadius: 200,
            }}
          />
        </MagnifierStyle>
      </div>
    </div>
  );
}
