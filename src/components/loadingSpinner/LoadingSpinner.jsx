import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './loadingSpinner.module.css';

const LoadingSpinner = ({show}) => {
  return (
    <>
    {
      show && (<div className={styles.loadingSpinner}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>)
    }
    </>
  );
}

export { LoadingSpinner };