export const breakpoints = {
  xxs: "380px",
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1400px",
};

const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}) { ${style} }`;
};
export default mediaQueries;
