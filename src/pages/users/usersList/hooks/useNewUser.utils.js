import countries from '../../../../data/countries.json';

const validatorMap = {
  name: (value) => value.length > 3,
  country: (value) => countries.includes(value),
  email: (value) => value.includes('@'),
  phone: (value) => value.startsWith('+') && value.length > 1,
}

const validator = (prevNewUser, currentNewUser) => {
  const validationErrors = {};
  ['name', 'country', 'email', 'phone'].forEach((field) => {
    if (prevNewUser[field] && !currentNewUser[field])  {
      validationErrors[field] = 'empty field';
      return;
    }
    if (!currentNewUser[field]) return;
    if (!(validatorMap[field](currentNewUser[field]))) {
      validationErrors[field] = 'invalid input';
    }
  });
  return validationErrors;
}

export { validator };