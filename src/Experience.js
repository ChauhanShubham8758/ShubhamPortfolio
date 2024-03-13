import { useState } from "react";
import { SegmentedControl, Flex, Group, Title, Badge } from "@mantine/core";
import classes from "./Experience.module.css";
import WorkExperience from "./TimeLine";
import Education from "./Education";
import AboutMe from "./AboutMe";
import useViewPort from "./hooks/useViewPort";

const tabs = {
  about: <AboutMe></AboutMe>,
  general: <WorkExperience></WorkExperience>,
  test: <Education></Education>,
};

export function Experience() {
  const [section, setSection] = useState("about");
  const size=useViewPort();

  return (
    <section id="about" className={classes.aboutSection}>
      <Group justify="center">  
        <Badge variant="filled" size="lg">
          All about me and my Experience{" "}
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="xl" mb="xl">
        Explore my journey's highlights in a glance.
      </Title>
      <nav className={classes.navbar}>
        <div className={classes.experienceDiv}>
          <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <SegmentedControl
              className={classes.segmentList}
              m={"auto"}
              value={section}
              onChange={(value) => setSection(value)}
              transitionTimingFunction="ease"
              size={size}
              radius="xl"
              data={[
                { label: "About me", value: "about" },
                { label: "Experience", value: "general" },
                { label: "Education", value: "test" },
              ]}
            />
          </Flex>
        </div>

        <div className={classes.firstDiv}>
          <div className={classes.navbarMain}>
            <div className={classes.imgDiv}>
              <img
                src="https://res.cloudinary.com/dcmpkhero/image/upload/v1709723761/projects/wzjl7f8indce5fyufhzq.jpg"
                width={400}
                height={400}
                alt="not-found"
              ></img>
            </div>
            <div className={classes.sectionDiv}>{tabs[section]}</div>
          </div>
        </div>
      </nav>
    </section>
  );
}
