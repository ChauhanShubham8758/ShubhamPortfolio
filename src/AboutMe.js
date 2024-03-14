import { Timeline, Text } from "@mantine/core";
import { IconCircleDotFilled } from "@tabler/icons-react";
import classes from "./AboutMe.module.css";


export default function AboutMe() {
  return (
    <Timeline ta={"justify"} active={3} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconCircleDotFilled size={12} />} >
        <Text ta={"justify"}  size="md">
          Greetings! Currently serving as a Dotnet Core Developer at BigScal
          Technologies Pvt Ltd. Holding a Master's degree in Computer
          Applications from Sardar Patel University, Gujarat (2020-2022), I've
          improved my skills set in various technologies, including Dotnet MVC,
          Blazor, and ReactJS.
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCircleDotFilled size={12} />} className={classes.item_Content}>
        <Text ta={"justify"}  size="md">
          My expertise spans both front-end and back-end development, with a
          focus on crafting efficient and scalable solutions. I thrive on
          tackling challenges in API integration and optimizing performance.
          Leveraging my proficiency in version control systems like Git and TFS,
          I ensure smooth collaboration and streamlined code management within
          teams.
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCircleDotFilled size={12} />} lineVariant="dashed" className={classes.item_Content}>
        <Text ta={"justify"}  size="md">
          Throughout my career, I've had the privilege of working on diverse
          projects. Let's connect and explore how I can bring value to your
          projects with my expertise and dedication!
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
