import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Flex,
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import classes from "./EmailBanner.module.css";

export function EmailBanner() {
  return (
    <div className={classes.outer}>
      <Container
        pt={{ sm: "20px", md: "100px" }}
        pb={{ sm: "80px", md: "100px", xs: "40px" }}
        pl={{ xs: "0" }}
        pr={{ xs: "0" }}
      >
        <Flex
          gap="xl"
          justify="center"
          align="center"
          direction={{
            sm: "column-reverse",
            md: "column-reverse",
            lg: "column-reverse",
          }}
          wrap="wrap"
        >
          <Container w={{ sm: "100%", md: "100%" }} ta={{ sm: "center" }}>
            <Image
              src="https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-5/256/ToDo-List-icon.png"
              width={"100%"}
              maw={"376px"}
              display={"inline"}
            />
            <Title className={classes.title}>
              Hello, my name is
              <TypeAnimation
                sequence={[` Shubham Chauhan`, 1000, ""]}
                speed={50}
                style={{ whiteSpace: "pre-line", fontSize: "30px" }}
                repeat={Infinity}
              />
            </Title>

            <Text ta={"justify"} c="dimmed" mt="md">
              I'm an experienced software developer skilled in Blazor, .NET
              Core, and React.js. With a track record of delivering high-quality
              solutions, I specialize in dynamic web applications and robust
              server-side development. Proficient in C#, ASP.NET, and version
              control systems like Git and TFS, I prioritize code quality and
              collaborative teamwork. My hands-on experience with React.js
              includes crafting engaging user interfaces. Eager to contribute to
              innovative projects, I bring expertise and a commitment to
              excellence.
            </Text>

            <Group mt={30} justify={"center"}>
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
          </Container>
        </Flex>
      </Container>
    </div>
  );
}
