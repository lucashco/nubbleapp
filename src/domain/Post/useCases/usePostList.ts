import {useState, useEffect} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (err) {
      console.log('LOG', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
  };
}
