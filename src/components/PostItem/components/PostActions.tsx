import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  function likePost() {
    // TODO
  }

  function navigateToComment() {
    // TODO
  }

  function favoritePost() {
    // TODO
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        text={reactionCount}
        marked={true}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        onPress={navigateToComment}
        text={commentCount}
        icon={{
          default: 'chat',
          marked: 'chat',
        }}
      />
      <Item
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmark',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, marked = false, icon, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      mr="s24">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" bold preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
