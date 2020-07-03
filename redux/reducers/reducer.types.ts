export type Post = {
  id: number;
  title: string;
  body: string;
};

export type State = {
  isLoading: boolean;
  posts: Post[];
  post: Post | null;
};
