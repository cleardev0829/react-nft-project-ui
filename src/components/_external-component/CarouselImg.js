import faker from "faker";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { mockImgFeed } from "../../utils/mockImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CAROUSELS = [
  "000",
  // "001",
  // "002",
  // "003",
  // "004",
  // "005",
  // "006",
  // "007",
].map((item, index) => {
  return {
    title: item,
    description: faker.lorem.lines(),
    image: mockImgFeed(index),
  };
});

const CarouselImgStyle = styled("img")(({ theme }) => ({
  height: 580,
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.up("xl")]: {
    height: 520,
  },
}));

const onChange = (e) => {
  // console.log(e);
};

const onSwipeMove = (e) => {
  // console.log("move=", e);
};

export default function CarouselImg() {
  return (
    <Box sx={{ position: "relative" }}>
      <Carousel
        autoPlay
        interval={7000}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={false}
        showStatus={false}
      >
        {CAROUSELS.map((item) => {
          return <CarouselImgStyle src={item.image} />;
        })}
      </Carousel>
    </Box>
  );
}
