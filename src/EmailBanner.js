import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Flex,
  rem,
  ActionIcon,
} from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { TypeAnimation } from "react-type-animation";
import classes from "./EmailBanner.module.css";

export function EmailBanner() {
  return (
    <div className={classes.outer}>
      <Container
        pt={{ sm: "20px", md: "100px" }}
        pb={{ sm: "80px", md: "100px", xs: "66px", lg: "100px" }}
        pl={{ sm: "0" }}
        pr={{ sm: "0" }}
        className={classes.banner_container}
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
              src="https://res.cloudinary.com/dcmpkhero/image/upload/v1710382018/ohqpfjapbdi2nm1l5eh6.png"
              width={"100%"}
              maw={{sm:"65% !important",xs:"100%", xxs:"100%",md:"60%",lg:"50%"}}
              display={"inline"}
              style={{mixBlendMode:"darken"}}
            />
            <Title className={classes.title}>
            Hey there, I'm 
              <TypeAnimation
                sequence={[` Shubham Chauhan`, 1000, ""]}
                speed={50}
                style={{ whiteSpace: "pre-line", fontSize: "30px", color:"#dc143c"}}
                repeat={Infinity}
              />
            </Title>

            <Text ta={"justify"}  mt="md">
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
              <a
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                href="https://res.cloudinary.com/dcmpkhero/image/upload/v1737835116/projects/ShubhamChauhan_DotnetDeveloper_1_fl6o41.pdf"
                rel="noreferrer"
              >
                <Button radius="xl" size="md" className={classes.control}>
                  Resume
                </Button>
              </a>

              <a
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                href="https://wa.me/919106909466"
                rel="noreferrer"
              >
                <Button variant="filled" radius="xl" size="md" color="teal">
                  WhatsApp
                  <ActionIcon
                    size="lg"
                    color="white"
                    variant="transparent"
                    component="div"
                  >
                    <IconBrandWhatsapp
                      style={{ width: rem(25), height: rem(25) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Button>
              </a>
            </Group>
          </Container>
        </Flex>
      </Container>
    </div>
  );
}
