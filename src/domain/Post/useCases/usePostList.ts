import {useState, useEffect} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchInitialData() {
    try {
      setError(false);
      setLoading(true);
      const list = await postService.getList(1);
      setPostList(list);
      // TODO: validar se tem  mais páginas
      setPage(2);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading) {
      return;
    }

    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(currentList => currentList.concat(list));
      setPage(currentPage => currentPage + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
