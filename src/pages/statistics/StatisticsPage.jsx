import { Typography } from '@mui/material';
import { CountriesPie } from './components/countriesPie/CountriesPie';
import styles from './statistics.module.css';

function StatisticsPage() {
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
    </div>

  );
}

export default StatisticsPage;
