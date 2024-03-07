import {
  Badge,
  Group,
  Title,
  Text,
  SimpleGrid,
  Container,
  Tabs,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./Projects.module.css";
import { ProjectLists } from "./ProjectLists";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
];

const projectTypes = ["all", "dotnet mvc", "dotnet core", "blazor", "react"];
const tabs = projectTypes.map((item) => (
  <Tabs.Tab key={item} value={item}>
    {item}
  </Tabs.Tab>
));
export function Projects() {
  const features = mockdata.map((feature) => (
    <div key={feature.title}>
      <ProjectLists cardItem={feature} />
    </div>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Explore My Projects
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm" mb="sm">
      Discover My Creative Projects
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" m={"auto"}>
      Discover my passion for innovation through meticulously crafted projects, where creativity meets attention to detail.
      </Text>

      <Tabs defaultValue="all" variant="pills">
        <Tabs.List>{tabs}</Tabs.List>
        <Tabs.Panel value="all">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
            {features}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
