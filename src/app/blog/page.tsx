import { Column, Heading } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";

export const metadata = {
  title: 'Blog - Ayesha Mughal',
  description: 'Read my latest articles on web development, programming, and tech.',
};

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Heading marginBottom="l" variant="display-strong-s">
        Blog
      </Heading>
      <Column gap="xl" fillWidth>
        <Posts range={[1]} direction="column" />
        <Posts range={[2, 4]} columns="2" />
        <Posts range={[5]} columns="3" />
			</Column>
    </Column>
  );
}
