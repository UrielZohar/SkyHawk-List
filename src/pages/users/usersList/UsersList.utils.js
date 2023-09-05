const deleteUser = (users, setUsers) => ({id, name}) => {
  const answer = confirm(`Are you sure you want to delete '${name}' ?`);
  if (!answer) return;
  const usersAfterDelete = users.filter((user) => user.id !== id);
  setUsers(usersAfterDelete);
}

export { deleteUser };