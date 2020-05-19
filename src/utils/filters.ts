export const phoneFilter = (value: any) => {
  if (!value) return '';
  value = value.toString();
  return value
    .replace(/[^0-9]/g, '')
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3 $4 $5');
};

export const round = (value: number) => {
  return Math.round(value * 1e2) / 1e2;
};
