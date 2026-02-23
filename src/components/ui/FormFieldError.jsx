const FormFieldError = ({ error }) => {
  if (!error) return null;

  return (
    <p className="text-red-600 text-sm mt-1" role="alert">
      {error}
    </p>
  );
};

export default FormFieldError;
