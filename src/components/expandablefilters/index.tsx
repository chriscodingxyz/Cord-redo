import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

type ExpandableFiltersProps = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
};

export default function ExpandableFilters({
  title,
  children,
  open = false,
}: ExpandableFiltersProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <>
      <TitleButtonWrapper>
        <ExpandButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </ExpandButton>
        <h4>{title}</h4>
      </TitleButtonWrapper>

      <ExpandableDiv isOpen={isOpen}>{children}</ExpandableDiv>
    </>
  );

  // You need to create your own checkbox component with a custom checkmark
}

const ExpandableDiv = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const TitleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const ExpandButton = styled.button`
  border: 0px;
  padding-left: 0px;
  background-color: transparent;
  font-size: 1.6em;
  font-weight: 700;
  width: 30px;
  cursor: pointer;
`;
