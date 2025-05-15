export const getYears = (date: Date) => {
  return Math.floor(
    (new Date().getTime() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  );
};
