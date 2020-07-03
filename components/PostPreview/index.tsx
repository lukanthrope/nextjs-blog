import Link from 'next/link';
import { Post } from '../../redux/reducers/reducer';
import { H1, BodyConainer } from '../../styles';

const PostPreview = ({ title, body, id }: Post): JSX.Element => (
  <div>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <H1>{title}</H1>
    </Link>
    <BodyConainer>{body}</BodyConainer>
  </div>
);

export default PostPreview;
