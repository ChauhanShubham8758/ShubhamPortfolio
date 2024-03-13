import {
  Text,
  SimpleGrid,
  UnstyledButton,
  Title,
  Container,
  Tabs,
  Avatar,
} from "@mantine/core";
import { useState } from "react";
import classes from "./SkillsSection.module.css";

const mockdata = [
  {
    title: "HTML",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079116/projects/onej1glbohzjnkzvcnoa.png",
    type: ["front-end"],
  },
  {
    title: "CSS",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079119/projects/c3snkatguajkpnnx3w4l.png",
    type: ["front-end"],
  },
  {
    title: "Javascript",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079116/projects/dzhkvopuxeswtuaenpgq.png",
    type: ["front-end"],
  },
  {
    title: "SQL Server",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710136856/projects/ywfr4vbandffipukhymo.png",
    type: ["back-end"],
  },
  {
    title: "Oracle",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079116/projects/abffqt9xf9b4gl5w5qta.png",
    type: ["back-end"],
  },
  {
    title: "Asp.net MVC",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710133742/projects/dqlpvwxnrgbxpyf3a2wy.png",
    type: ["back-end"],
  },
  {
    title: ".Net Core",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079117/projects/wtlaoimgzybplqqzar1f.png",
    type: ["back-end"],
  },
  {
    title: "C#",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079117/projects/udvxdhtg3xi0dalck7ly.png",
    type: ["back-end"],
  },
  {
    title: "LINQ",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079118/projects/h0i0n6db95azkw6geqqd.png",
    type: ["back-end"],
  },
  {
    title: "EF Core",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710134056/projects/cyfbwvg27gigdf3suzfa.png",
    type: ["back-end"],
  },
  {
    title: "Blazor",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079116/projects/vtuaq8kdqil4itmrhpfu.png",
    type: ["back-end"],
  },
  {
    title: "React",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079117/projects/kfhwlnq0poqtmuohu858.png",
    type: ["front-end"],
  },
  {
    title: "Redux",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079118/projects/uiorlsm2bn2gvxeextos.png",
    type: ["front-end"],
  },
  {
    title: "MUI",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079117/projects/jstej5q94e7tn6yetkjd.png",
    type: ["front-end"],
  },
  {
    title: "Mantine UI",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079117/projects/eab6hvewydfv6uiolinj.png",
    type: ["front-end"],
  },
  {
    title: "Chakra UI",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710087110/projects/j5na9s10a0mmflckougu.png",
    type: ["front-end"],
  },
  {
    title: "GIT",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710079116/projects/xhtyq328bhhikqzaj3xp.png",
    type: ["front-end", "back-end"],
  },
  {
    title: "TFS",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710080946/projects/mlx8kj0p44hicbv0csdv.png",
    type: ["front-end", "back-end"],
  },
  {
    title: "jQuery",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710090213/projects/iuz6okbl8agsqybkyrww.png",
    type: ["front-end"],
  },
  {
    title: "AJAX",
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1710092298/projects/dvldmlncsybdfnrofpjx.png",
    type: ["front-end"],
  },
];

const projectTypes = [
  "all",
  ...new Set(
    mockdata.flatMap(({ type }) => type.map((Project) => Project.toLowerCase()))
  ),
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const features = mockdata
    .filter(
      ({ type }) =>
        activeTab === "all" ||
        type.some(
          (project) => project.toLowerCase() === activeTab.toLowerCase()
        )
    )
    .map((item) => (
      <UnstyledButton key={item.title} className={classes.item}>
        <Avatar
          variant="transparent"
          radius="xs"
          size="lg"
          src={item.logo}
          className={classes.avatarImg}
        />

        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    ));

  const tabs = projectTypes.map((item) => (
    <Tabs.Tab key={item} value={item}>
      {item.toUpperCase()}
    </Tabs.Tab>
  ));

  return (
    <section id="skills">
      <div className={classes.skillContainer}>
        <Container size="lg" py="xl">
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="sm"
            mb="sm"
          >
            My Technical Skills
          </Title>

          <Tabs defaultValue="all" variant="pills" onChange={setActiveTab}>
            <Tabs.List display="flex" justify="center" mt={30}>
              {tabs}
            </Tabs.List>
            {projectTypes.map((tabName) => (
              <Tabs.Panel key={tabName} value={tabName}>
                <SimpleGrid
                  cols={{ base: 1, md: 5, sm: 4, xs: 2, xxs: 2 }}
                  spacing="xl"
                  mt={50}
                >
                  {features}
                </SimpleGrid>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Container>
      </div>
    </section>
  );
}
