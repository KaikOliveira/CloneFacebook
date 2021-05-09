import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  height: 40%;
  border: 2px solid #dddfe2;
  color: #333;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  & + div {
    margin-top: 10px;
  }

  &:hover {
    border-color:#0091EA ;
  }
  ${props =>
    props.isFocused &&
    css`
      color: #0091EA;
      border-color: #0091EA;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #0091EA;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;
    padding-left: 10px;
    &::placeholder {
      color: #666;
      padding-left: 5px;
    }
    & + input {
      margin-top: 8px;
    }
  }
`;