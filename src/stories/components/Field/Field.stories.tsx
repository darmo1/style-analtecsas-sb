import { Meta, StoryObj } from "@storybook/react";
import Field from "../../../components/Input/Field/Field";

const meta: Meta<typeof Field> = {
  title: "UI/Fiel",
  component: Field,
};
export default meta;

type Story = StoryObj<typeof Field>;

export const FieldStory: Story = {
  args: {
    type: "file",
    className: "bg-blue-200",
    label: "Este es el label",
    hideLabel: false,
    showRequired: true,
    name: "test",
    placeholder: "escribe aqui",
  },
  render: () => <div className="bg-red-300"><Field type="file" label="Este es el label"/></div>
};
