const ValidationInformation = ({newUser, newUserErrors}) => {
  const emptyFieldsCount = Object.keys(newUser).filter((key) => !newUser[key]).length;
  const errorsCount = Object.keys(newUserErrors).length;
  
  return (<div>{`Errors: Empty Fields - ${emptyFieldsCount}, Invalid Fields - ${errorsCount}`}</div>);
};

export { ValidationInformation };