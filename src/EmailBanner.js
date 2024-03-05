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
            I'm Smit Savani. I have completed my BE in computer engineering. I
            have been working as a Junior React.js Developer at BigScal
            Technologies for the past two years. I’m skilled in reactjs, as well
            as HTML, CSS, and JavaScript. Throughout my working career, I've had
            the opportunity to work on diverse projects where I've improved my
            skills in front-end development, utilizing React.js to create
            responsive user interfaces. I have also worked with APIs and am
            familiar with version control programs like Git. I also pay close
            attention to details and aim to write legible, clean code.
          </Text>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
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
