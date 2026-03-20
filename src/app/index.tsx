import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "../features/restaurants/screens/restaurants.screen";
import { theme } from "../infrastructure/theme";

export default function Index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
