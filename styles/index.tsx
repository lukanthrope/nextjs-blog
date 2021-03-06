import styled from 'styled-components';

export const RootDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

export const A = styled.a`
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
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 150px;
`;

export const H1 = styled.h1`
  font-weight: 400;
  cursor: pointer;

  :hover {
    text-decoration-line: underline;
  }
`;

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 50px;
`;

export const BodyConainer = styled.p`
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const GrayText = styled.p`
  font-size: 0.8rem;
  color: grey;
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
