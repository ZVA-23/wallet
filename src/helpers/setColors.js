import { getColors } from "helpers/getColors";

export const setColors = (data) => {

  const paletteСolors = getColors();

  return data.map((el, idx) => ({ ...el, color: paletteСolors[idx] }));
};
