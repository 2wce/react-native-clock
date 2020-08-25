import React from "react";
import { Line } from "react-native-svg";
import { polarToCartesian } from "../utils/geometry";

type Props = {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
  strokeOpacity: string;
};

const Hand = ({
  center,
  radius,
  angle,
  stroke,
  strokeWidth,
  strokeOpacity,
}: Props) => {
  const conversionArgs = {
    centerX: center,
    centerY: center,
    radius,
    angleInDegrees: angle,
  };
  const { x, y } = polarToCartesian(conversionArgs);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      stroke={stroke}
      strokeOpacity={strokeOpacity}
    />
  );
};

export default Hand;
