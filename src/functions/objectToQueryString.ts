export default function objectToStringQueryParams(params: {
  [key: string]: unknown;
}) {
  const queryParams = ['?'];

  Object.keys(params).forEach((key) => {
    const queryString = `${key}=${params[key]}`;
    queryParams.push(queryString);
  });

  return queryParams.join('');
}
