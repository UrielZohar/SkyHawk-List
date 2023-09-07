const ValidationInformation = ({emptyFieldsCounter, errorFieldsCounter}) => {
  return (<div>
    {`Errors: Empty Fields - ${emptyFieldsCounter}, Invalid Fields - ${errorFieldsCounter}`}
  </div>)
};

export { ValidationInformation };