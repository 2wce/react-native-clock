import { Line, Text } from "react-native-svg";
import styled from "styled-components";

export const Minute = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

export const HourLine = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

export const HourNumber = styled(Text).attrs(({ theme }) => ({
  fill: theme.primaryColor,
}))``;
