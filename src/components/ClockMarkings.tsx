import React from "react";
import { G, Line, Text } from "react-native-svg";
import styled from "styled-components";
import { polarToCartesian } from "../utils/geometry";

type Props = {
  radius: number;
  center: number;
  minutes: number;
  hours: number;
};

const Minute = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

const HourLine = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

const HourNumber = styled(Text).attrs(({ theme }) => ({
  fill: theme.primaryColor,
}))``;

const ClockMarkings = ({ radius, center, minutes, hours }: Props) => {
  const minutesArray = new Array(minutes).fill(1);
  const hoursArray = new Array(hours).fill(1);

  const minuteSticks = minutesArray.map((minute, index) => {
    const conversionArgs = {
      centerX: center,
      centerY: center,
      radius,
      angleInDegrees: index * 5,
    };
    const start = polarToCartesian(conversionArgs);
    const end = polarToCartesian(conversionArgs);

    return (
      <Minute
        strokeWidth={2}
        strokeLinecap="round"
        key={index}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    );
  });

  const hourSticks = hoursArray.map((hour, index) => {
    const startArgs = {
      centerX: center,
      centerY: center,
      radius: radius - 10,
      angleInDegrees: index * 30,
    };

    const endArgs = {
      centerX: center,
      centerY: center,
      radius,
      angleInDegrees: index * 30,
    };

    const timeArgs = {
      centerX: center,
      centerY: center,
      radius: radius - 35,
      angleInDegrees: index * 30,
    };

    const start = polarToCartesian(startArgs);
    const end = polarToCartesian(endArgs);
    const time = polarToCartesian(timeArgs);

    return (
      <G key={index}>
        <HourLine
          strokeWidth={3}
          strokeLinecap="round"
          key={index}
          x1={start.x}
          x2={end.x}
          y1={start.y}
          y2={end.y}
        />
        <HourNumber
          textAnchor="middle"
          fontSize="17"
          fontWeight="bold"
          alignmentBaseline="central"
          x={time.x}
          y={time.y}
        >
          {index === 0 ? 12 : index}
        </HourNumber>
      </G>
    );
  });

  return (
    <G>
      {minuteSticks}
      {hourSticks}
    </G>
  );
};

export default ClockMarkings;
