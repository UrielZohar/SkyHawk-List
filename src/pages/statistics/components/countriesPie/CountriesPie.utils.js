const usersToPieData = (usersData) => {
  const countriesCountMap = {};
  usersData.forEach((user) => {
    const country = user.country;
    if (countriesCountMap[country]) {
      countriesCountMap[country] += 1;
    } else {
      countriesCountMap[country] = 1;
    }
  });
  const pieData = Object.keys(countriesCountMap).reduce((acc, country) => {
    acc.push({ id: country, value: countriesCountMap[country], label: country });
    return acc;
  }, []);

  return pieData;
};

export { usersToPieData };