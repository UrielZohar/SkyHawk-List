import { Typography } from '@mui/material';
import { CountriesPie } from './components/countriesPie/CountriesPie';
import { LoadingSpinner } from '../../components/loadingSpinner/LoadingSpinner';
import { useUsersContext } from '../../context/usersContext';
import styles from './statistics.module.css';

function StatisticsPage() {
  const { loading } = useUsersContext();

  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <div className={styles.statistics}>
          <div className={styles.statisticsHeader}>
            <Typography variant="h6">Countries Pie</Typography>
          </div>
          <div className={styles.statisticsContent}>
            <CountriesPie />
          </div>
        </div>
      </div>
    <LoadingSpinner show={loading} />
    </div>
  );
}

export default StatisticsPage;
