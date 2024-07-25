import React from "react";
import styled from "styled-components";

export default function CheckBox({ value }: { value: string }) {
  return (
    <CheckboxCont>
      <input type="checkbox" />
      <label htmlFor="checkbox">{value}</label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  /* position: relative; */
  border: 2px solid pink;
  display: flex;

  /* align-items: center; */
`;
