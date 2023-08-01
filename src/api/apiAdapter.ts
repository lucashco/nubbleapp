import {MetaDataPage} from '@types';

import {MetaDataPageApi} from './apiTypes';

/**
 * @description Adapta o MetaDataPage para o modelo de MetaData.
 */
export function toMetaDataPage(meta: MetaDataPageApi): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
