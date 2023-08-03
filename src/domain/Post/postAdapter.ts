import {Post, PostAPI} from './postTypes';

/**
 * @description Adapta o PostAPI para o modelo de Post.
 */
function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id,
    text: postAPI.text,
    author: {
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
      profileURL: postAPI.user.profile_url,
    },
    imageURL: postAPI.image_url,
    commentCount: parseInt(postAPI.meta.comments_count, 10),
    favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
    reactionCount: parseInt(postAPI.meta.like_count, 10),
  };
}

export const postAdapter = {
  toPost,
};
