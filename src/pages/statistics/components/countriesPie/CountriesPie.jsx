import { useUsersContext } from '../../../../context/usersContext';
import { usersToPieData } from './CountriesPie.utils';
import { PieChart } from '@mui/x-charts/PieChart';

export default function CountriesPie() {
  const { usersData } = useUsersContext();
  const pieData = usersToPieData(usersData);
  
  return (
    <PieChart
      series={[
        {
          data: pieData,
        },
      ]}
      width={800}
      height={400}
    />
  );
};

export { CountriesPie };