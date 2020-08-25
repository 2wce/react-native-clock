import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import Clock from "./src/components/Clock";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme";

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
`;

const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: theme.style === "light" ? "light-content" : "dark-content",
}))``;

const App = () => {
  const isDark = useColorScheme() === "dark";
  //console.log({ isDark });
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          centerContent={true}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Clock />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
