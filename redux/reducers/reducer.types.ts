export type Comment = {
  id: number;
  postId: number;
  body: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type State = {
  posts: Post[];
  post: Post | null;
};
