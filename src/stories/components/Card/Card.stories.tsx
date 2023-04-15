import { Meta, StoryObj } from "@storybook/react";
import Card from "../../../components/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Blog/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardBlog: Story = {
  render: () => (
    <Card
      imgSrc="/src/stories/assets/1.JPG"
      slug="https://ibb.co/d23hLNJ"
      title="Test"
      caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis turpis sed viverra sollicitudin. Vestibulum id malesuada orci. Nullam quam risus, volutpat vel viverra quis, dictum non porttitor."
      classNameContainer="hover:bg-[--gray-200]"
    />
  ),
};
