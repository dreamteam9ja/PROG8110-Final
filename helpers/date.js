const getMonthTruncated = (val) => {
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  switch (val) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return month[val];
  }
};

const getDateFormatted = () => {
  const d = new Date();
  const day = d.getDate();
  const month = getMonthTruncated(d.getMonth());
  const year = d.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default getDateFormatted;
