import UsersList from './usersList/UsersList';
import { LoadingSpinner } from '../../components/loadingSpinner/LoadingSpinner';
import { useUsersContext } from '../../context/usersContext';
import styles from './users.module.css';

function UsersPage() {
  const { loading } = useUsersContext();
  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <UsersList />
      </div>
      <LoadingSpinner show={loading} />
    </div>
  );
}

export default UsersPage;
