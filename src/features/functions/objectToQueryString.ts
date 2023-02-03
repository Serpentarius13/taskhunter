export default function objectToStringQueryParams(params: {
  [key: string]: unknown;
}): string {
  let queryParams = '?';

  Object.keys(params).forEach(key => {
    const queryString = `${key}=${params[key]}&`;
    queryParams += queryString;
  });

  return queryParams;
}
