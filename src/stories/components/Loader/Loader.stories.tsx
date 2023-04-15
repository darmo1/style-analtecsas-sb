import { Meta, StoryObj } from "@storybook/react";
import Loader from "../../../components/Loader/Loader";
import ComponentLoader from "../../../components/Loader/ComponentLoader/ComponentLoader";
import SkeletonLoader from "../../../components/Loader/SkeletonLoader/SkeletonLoader";
import InlineLoader from "../../../components/Loader/InlineLoader/InlineLoader";


const meta: Meta<typeof Loader> = {
  title:'UI/Loader',
  component: Loader
}
export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderStory: Story = {
  render: () => <div className="">
    <Loader />
  </div>
};

type StoryComponentLoader = StoryObj<typeof ComponentLoader>;
export const ComponentLoaderStory : StoryComponentLoader = {
  args: {
    timeout: 15000,
    size: '50',
  }
}

type StorySkeletonLoader = StoryObj<typeof SkeletonLoader>;
export const SkeletonLoaderStory: StorySkeletonLoader = {
  args: {
    className: "min-h-[200px]"
  },
  render: () => <div className="w-14"><SkeletonLoader /></div> 
}

type StoryInlineLoader =  StoryObj<typeof InlineLoader>;
export const ComponentInlineLoader: StoryInlineLoader = {
  args: {
    className:'text-black'
  },
  render: () => <InlineLoader />
}


