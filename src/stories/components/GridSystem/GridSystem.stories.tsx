import { Meta, StoryObj } from "@storybook/react";
import GridSystem from "../../../components/GridSystem";
import { ReactNode } from "react";

const meta: Meta<typeof GridSystem> = {
  title: "Grid System",
  component: GridSystem,
};

export default meta;

type Story = StoryObj<typeof GridSystem>;
const mockData = [
  {
    id: 0,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis turpis sed viverra sollicitudin. Vestibulum id malesuada orci. Nullam quam risus, volutpat vel viverra quis, dictum non porttitor.",
  },
  {
    id: 1,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis turpis sed viverra sollicitudin. Vestibulum id malesuada orci. Nullam quam risus, volutpat vel viverra quis, dictum non porttitor.",
  },
  {
    id: 2,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis turpis sed viverra sollicitudin. Vestibulum id malesuada orci. Nullam quam risus, volutpat vel viverra quis, dictum non porttitor.",
  },
  {
    id: 3,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis turpis sed viverra sollicitudin. Vestibulum id malesuada orci. Nullam quam risus, volutpat vel viverra quis, dictum non porttitor.",
  },
  {
    id: 4,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis turpis sed viverra sollicitudin. Vestibulum id malesuada orci. Nullam quam risus, volutpat vel viverra quis, dictum non porttitor.",
  },
];

type Info = {
  id: string;
  title: string;
  description: string;
};

export const GridSystemLayout: Story = {
  render: () => (
    <GridSystem items={mockData} cols={3}>
      {(
        {id, title, description},
        { index, rowIndex, colIndex }
      ): ReactNode => (
        <div key={id}>
          <h2>
            {index} - {title}{" "}
          </h2>
          <p>
            {" "}
            position: {rowIndex}/ {colIndex}
          </p>
          <p>{description}</p>
        </div>
      )}
    </GridSystem>
  ),
};
