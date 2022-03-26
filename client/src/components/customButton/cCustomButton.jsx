import React from "react";
import { CustomButtonContainer } from "./sCustomButton";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
