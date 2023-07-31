export const parseErrorMessage = (err) => {
  let errMessage =
    typeof err.response.data == 'object'
      ? err.response.data.errors?.at(0)
      : err.response.data || 'Something went wrong!';

  return errMessage;
};
