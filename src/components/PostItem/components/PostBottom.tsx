import React from 'react';

import {Post} from '@domain';

import {Box, BoxProps, Text} from '@components';

type PostBottomProps = Pick<Post, 'text' | 'author' | 'commentCount'> &
  BoxProps;

export function PostBottom({
  author,
  text,
  commentCount,
  ...rest
}: PostBottomProps) {
  const commentText = getCommentText(commentCount);

  return (
    <Box {...rest}>
      <Text bold preset="paragraphMedium">
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text bold color="primary" preset="paragraphSmall" mt="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return '';
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
