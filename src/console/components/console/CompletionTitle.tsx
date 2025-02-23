import React from "react";
import styled from "../../colorscheme/styled";

const Li = styled.li<{ shown: boolean }>`
  display: ${({ shown }) => (shown ? "display" : "none")};
  background-color: ${({ theme }) => theme.completionTitleBackground};
  color: ${({ theme }) => theme.completionTitleForeground};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 3px 25px !important;
  position: relative;
`;

interface Props extends React.HTMLAttributes<HTMLElement> {
  shown: boolean;
  title: string;
}

const CompletionTitle: React.FC<Props> = (props) => (
  <Li {...props}>{props.title}</Li>
);

export default CompletionTitle;
