import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem; // 1rem = 16px, 10rem = 160px
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--blue-light);
    font-size: 1rem;
    cursor: pointer;
    margin-right: 2rem;
    padding: 0 2rem;
    height: 3rem;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem; // 4px no Desktop
    height: 3rem; // altura
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
