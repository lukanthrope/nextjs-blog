import Link from 'next/link';
import { Post } from '../../redux/reducers/reducer';

const PostPreview = ({ title, body, id }: Post): JSX.Element => (
  <div>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <h1>{title}</h1>
    </Link>
    <p>
      {body}
      {id}
    </p>
  </div>
);

export default PostPreview;
