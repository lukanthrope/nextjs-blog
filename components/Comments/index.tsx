import { Comment } from '../../redux/reducers/reducer.types';
import SingleComment from '../Comments/SingleComment';
import { H2, GrayText } from '../../styles';

type Props = {
  comments: Comment[];
};

const Comments = ({ comments }: Props): JSX.Element => {
  return (
    <div>
      <H2>Comments</H2>
      {comments && comments.map(({ body, id }: Comment) => <SingleComment key={id} body={body} />)}
      {comments.length === 0 && <GrayText>No comments yet</GrayText>}
    </div>
  );
};

export default Comments;
