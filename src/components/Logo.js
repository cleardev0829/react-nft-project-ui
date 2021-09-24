import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        enable-background="new 0 0 32 32"
        // xml:space="preserve"
      >
        {" "}
        <image
          id="image0"
          width="32"
          height="32"
          x="0"
          y="0"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABYlBMVEUAAAA5OThxcW9XV1Vq
amj///+5ubjj4+NgYGBsbGzHx8fX19eOjo78/PyDg4O3t7ePj4/c3NyNjY3d3d12dnbPz8+Ghob9
/f1oaGizs7O0tLTi4uJvb2+IiIi2trb39/eYmJjBwcHu7u6ysrKhoaHx8fHa2trQ0NDU1NQqKioA
AAACAgIzMzP09PRLS0sdHR3y8vJaWlq9vb3p6el3d3eRkZH6+vrh4eHV1dVWVlZ/f3/Ly8vw8PDl
5eX+/v4SEhIICAhNTU0gICC+vr4oKCgBAQERERE6OjoQEBBHR0dzc3MXFxfDw8P4+Pjs7Ox+fn4u
Li6fn58GBgbf39/z8/NZWVlmZmbb29seHh6SkpKtra1RUVFtbW2goKBra2tycnJAQEAVFRXt7e0W
FhYNDQ0YGBhfX1+1tbUsLCwiIiJhYWHq6ur29vbFxcWwsLDNzc3S0tKCgoK/v79NTUuqqqp+fn3R
WtRQAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElN
RQflCRgOEihVP8izAAABDUlEQVQ4y2NgYGBkwgmYGUCAhRUnYCNWATsHJxdeBdw8vHy8/AKCeBSw
CgmLiIrhUSAuJighKYVTgbSMrJy8gpgi+b6gkgIlZRVFVZiMmjovugINTS0tbR1dqAI9fQN0BYZa
RsYmWqasrGbmQFXCFuLoCiy1rKxtRG3thOy1HKx4HZ0wTHB2cXVzt9IV9PAU9fL2wbTCzteP3z/A
VSYwSIpVPjgEU0FIaBgra3iEeyRQgVJUMBYTorViYuOC4oU9Epw5EtWx+CKJMzklNU2eNT3DIzOd
Ncs9BCOg7LLN/eyAdI4tULNvjt1ARBYY5Ob5+OTjU6BcUKhWhE+BjV8OuzhtHUmeguISnKCUgQEA
8lRCAHl7NM0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMjRUMTQ6MTg6NDArMDA6MDDOX1mB
AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTI0VDE0OjE4OjQwKzAwOjAwvwLhPQAAAABJRU5E
rkJggg=="
        />
      </svg>
    </Box>
  );
}
