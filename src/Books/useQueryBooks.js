import { useQuery } from 'react-query';

export default function useQueryBooks() {
  return useQuery('fetchBooks', () =>
    fetch(
      'https://my-json-server.typicode.com/vikbert/jsonfaker/books',
    ).then((res) => res.json()),
  );
}
