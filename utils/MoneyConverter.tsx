export const numberToText = (num: number): string => {
  const abbreviations = ["", "k", "M", "B", "T"];
  const sign = num < 0 ? "-" : "";
  num = Math.abs(num);
  const tier = Math.floor(Math.log10(num) / 3);
  if (tier === 0) {
    return `${sign}${num}`;
  }
  const suffix = abbreviations[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = Math.round((num / scale) * 10) / 10;
  return `${sign}${scaled}${suffix}`;
};

export const textToNumber = (text: string): number | null => {
  const match = text.match(/^(-)?(\d+(\.\d+)?)([kMBT])?$/);
  if (!match) {
    return null;
  }
  const [, sign, numStr, , suffix] = match;
  const num = parseFloat(numStr);
  const abbreviations = ["", "k", "M", "B", "T"];
  const tier = abbreviations.indexOf(suffix || "");
  if (tier === -1) {
    return sign ? -num : num;
  }
  const scale = Math.pow(10, tier * 3);
  return sign ? -num * scale : num * scale;
};
