interface IConversionArgs {
  centerX: number;
  centerY: number;
  radius: number;
  angleInDegrees: number;
}

/**
 * Convert time to polar coordinate systems
 * @args IConversionArgs
 */
export const polarToCartesian = ({
  centerX,
  centerY,
  radius,
  angleInDegrees,
}: IConversionArgs) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};
