const getYesterdayDate = (timezone: string | undefined) => {
  const date = new Date().toLocaleString("en-US", { timeZone: timezone });
  const yesterday = new Date(
    new Date(date).setDate(new Date(date).getDate() - 1),
  );
  return yesterday.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

export default getYesterdayDate;
