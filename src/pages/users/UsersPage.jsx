import UsersList from './usersList/UsersList';
import styles from './users.module.css';

function UsersPage() {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <UsersList />
      </div>
    </div>
  );
}

export default UsersPage;
