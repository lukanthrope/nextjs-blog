type Props = {
  body: string;
  key?: string | number;
};

const SingleComment = ({ body }: Props): JSX.Element => (
  <div>
    <p>{body}</p>
  </div>
);

export default SingleComment;
