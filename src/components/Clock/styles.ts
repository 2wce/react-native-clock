import styled from "styled-components/native";
import Hand from "../Hand";

export const Seconds = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.accentColor,
  strokeOpacity: "1",
}))``;

export const Minutes = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.5",
}))``;

export const Hours = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.8",
}))``;
