import styled from "@emotion/styled";

export const Container = styled.div`
  width: 360px;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & form input {
    border: 1px black solid;
    padding-left: 6px;
    margin-top: 6px;
    margin-bottom: 18px;
    height: 48px;
    cursor: pointer;
  }

  & form button {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 6px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 120px;
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    color: gray;
    margin-left: 6px;
    margin-right: 6px;
  }
`;
