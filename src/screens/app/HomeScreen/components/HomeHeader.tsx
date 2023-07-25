import React from 'react';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Box backgroundColor="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row" alignItems="center">
        <Box>
          <Icon name="search" />
        </Box>
        <Box ml="s24">
          <Icon name="bell" />
        </Box>
        <Box ml="s24">
          <Icon name="comment" />
        </Box>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  marginBottom: 's24',
};
