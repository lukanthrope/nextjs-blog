import styled from 'styled-components';

export const RootDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

export const HoverText = styled.text`
  cursor: pointer;

  :hover {
    text-decoration-line: underline;
  }
`;

export const A = styled(HoverText)`
  text-decoration: none;
  font-size: 1.2rem;
  color: rgb(255, 20, 147);
  cursor: pointer;

  :hover {
    text-decoration-line: underline;
  }
`;

export const Container = styled.header`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 150px;
`;

export const H1 = styled(HoverText)`
  max-width: 100px;
  font-size: 2.2rem;
`;

export const BodyConainer = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  * {
    margin-bottom: 20px;
  }

  input,
  textarea {
    border-radius: 5px;
    border: 1px solid black;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid cyan;
  }

  #body {
    height: 150px;
  }

  .red {
    color: red;
  }
`;

export const Button = styled.button`
  height: 30px;
  background: deeppink;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
