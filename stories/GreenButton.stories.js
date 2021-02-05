import React from "react";

import { GreenButton } from "../src/components/GreenButton";

export default {
  title: "Example/GreenButton",
  component: GreenButton,
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

const Template = (args) => <GreenButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  variant: "contained",
  children: "Confirmer",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  variant: "outlined",
  children: "Confirmer",
};
