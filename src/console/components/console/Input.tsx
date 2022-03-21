import React from "react";
import styled from "../../colorscheme/styled";

const Container = styled.div`
  background-color: ${({ theme }) => theme.commandBackground};
  color: ${({ theme }) => theme.commandForeground};
  display: flex;
  border-bottom: 3px solid #fff;
  padding: 5px;
`;

const Prompt = styled.i`
  margin: 0 5px;
  font-size: 16px;
  line-height: 22px;
  color: #eb6f92;
`;

const InputInner = styled.input`
  font-size: 16px;
  border: none;
  flex-grow: 1;
  outline: 0;
  background-color: ${({ theme }) => theme.commandBackground};
  color: ${({ theme }) => theme.commandForeground};
`;

interface Props {
  prompt: string;
  value: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const input = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    input?.current?.focus();
  }, []);

  return (
    <Container>
      <Prompt>{props.prompt}</Prompt>
      <InputInner
        ref={input}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
        value={props.value}
      />
    </Container>
  );
};

export default Input;
