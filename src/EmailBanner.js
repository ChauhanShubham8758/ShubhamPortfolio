import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
} from "@mantine/core";
// import image from './image.svg';
import { TypeAnimation } from "react-type-animation";

import classes from "./EmailBanner.module.css";

export function EmailBanner() {
  return (
    <div className={classes.outer}>
    <Container size="md" >
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hello, my name is
            <br/>
            {/* <Title className={classes.authername}> */}
              <TypeAnimation
                sequence={[
                  `Shubham Chauhan`,
                  1000,
                  "",
                ]}
                speed={50}
                style={{ whiteSpace: "pre-line", fontSize: "30px" }}
                repeat={Infinity}
              />
            {/* </Title> */}
          </Title>

          <Text c="dimmed" mt="md">
          Experienced software developer with a versatile skill set, encompassing 1 year as a Blazor developer, 2 years as a .NET Core developer, and proficiency in React.js. I bring a track record of delivering high-quality solutions, specializing in dynamic web applications and robust server-side development. Skilled in C#, ASP.NET, and .NET Core, with a strong command of version control systems like Git and TFS. My hands-on experience with React.js includes the creation of engaging demos, demonstrating my ability to build interactive and responsive user interfaces. Committed to code quality, best practices, and collaborative teamwork, I am eager to contribute my expertise to innovative projects.
          </Text>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Resume
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Contact
            </Button>
          </Group>
        </div>
        <Image
          src="https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-5/256/ToDo-List-icon.png"
          className={classes.image}
        />
      </div>
    </Container>
    </div>
  );
}
