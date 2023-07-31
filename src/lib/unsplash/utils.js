export const parseErrorMessage = (err) => {
  console.log(err.response.data)
  let errMessage =
    typeof err?.response?.data == 'object'
      ? err?.response?.data?.errors?.at(0)
      : err?.response?.data || 'Something went wrong!';

  return errMessage;
};
