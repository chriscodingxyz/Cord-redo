import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";

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
  display: flex;
  gap: 10px;
  color: ${colors.fontColor};

  /* align-items: center; */
`;
