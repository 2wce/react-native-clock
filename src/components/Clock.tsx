import React, { useState } from "react";
import Svg from "react-native-svg";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import ClockMarkings from "./ClockMarkings";
import Hand from "./Hand";
import { getTime } from "../utils/time";
import { useInterval } from "../utils/useInterval";

const Seconds = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.accentColor,
  strokeOpacity: "1",
}))``;

const Minutes = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.5",
}))``;

const Hours = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.8",
}))``;

const { width } = Dimensions.get("window");
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const hourStickCount = 12;
const minuteStickCount = hourStickCount * 6;

// console.log({ diameter, radius });
const Clock = () => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <Svg height={width} width={width}>
      <ClockMarkings
        radius={radius}
        center={center}
        minutes={minuteStickCount}
        hours={hourStickCount}
      />
      <Seconds
        angle={time.seconds}
        center={center}
        radius={radius - 40}
        strokeWidth="1"
      />
      <Minutes
        angle={time.minutes}
        center={center}
        radius={radius - 50}
        strokeWidth="5"
      />
      <Hours
        angle={time.hours}
        center={center}
        radius={radius - 70}
        strokeWidth="7"
      />
    </Svg>
  );
};

export default Clock;
