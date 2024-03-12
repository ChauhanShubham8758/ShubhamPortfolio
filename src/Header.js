import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
  Tabs,
  px,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconMail,
  IconBrandGithub,
  IconChevronDown,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";
import classes from "./Header.module.css";

const mockdata = [
  {
    icon: IconBrandGithub,
    title: "Github",
    description: "Explore my codebase and projects in one place.",
    link: "https://github.com/ChauhanShubham8758",
  },
  {
    icon: IconBrandLinkedin,
    title: "LinkedIn",
    description: "Enhancing connections on LinkedIn. Let's connect!",
    link: "https://www.linkedin.com/in/shubham-c-4b0739153/",
  },
  {
    icon: IconBrandMedium,
    title: "Medium",
    description: "Check out my blog on Medium for interesting reads.",
    link: "https://medium.com/@chauhanshubham19765",
  },
  {
    icon: IconMail,
    title: "Gmail",
    description: "chauhanshubham19765@gmail.com",
    link: "mailto:chauhanshubham19765@gmail.com",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeDrawer(true);
    }
  };

  const links = mockdata.map((item) => (
    <a href={item.link} color="black" key={item.link}>
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500} c={"black"}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </a>
  ));

  return (
    <Box bg="#EDF2F8">
      <header className={classes.header}>
        <Group justify="space-between" align="center" pt={10}>
          <Image
            src="https://res.cloudinary.com/dcmpkhero/image/upload/v1710161110/projects/zaef2jg2t1pwwhdi6em2.png"
            height={40}
            width={50}
            display={{
              xxs: "none",
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            }}
          />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Tabs variant="pills" defaultValue="Home">
              <Tabs.List className={classes.tabListItems}>
                <Tabs.Tab
                  value="Home"
                  className={classes.link}
                  onClick={() => handleScroll("home")}
                >
                  Home
                </Tabs.Tab>

                <Tabs.Tab
                  value="About"
                  className={classes.link}
                  onClick={() => handleScroll("about")}
                >
                  About
                </Tabs.Tab>

                <Tabs.Tab
                  value="Projects"
                  className={classes.link}
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </Tabs.Tab>

                <Tabs.Tab
                  value="Skills"
                  className={classes.link}
                  onClick={() => handleScroll("skills")}
                >
                  Skills
                </Tabs.Tab>
                <Tabs.Tab
                  value="Contact Me"
                  className={classes.link}
                  onClick={() => handleScroll("contact")}
                >
                  Contact Me
                </Tabs.Tab>

                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                >
                  <HoverCard.Target>
                    <Button className={classes.link} padding={"0"} variant="subtle" color="black">
                      <Center inline>
                        <Box component="span" mr={5}>
                          Connect with me
                        </Box>
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                          color={theme.colors.blue[6]}
                        />
                      </Center>
                    </Button>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Tabs.List>
            </Tabs>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">

          <a href="#" className={classes.link}
           onClick={() => handleScroll("home")}
          >
            Home
          </a>

          <a href="#" className={classes.link} onClick={() => handleScroll("about")}>
            About
          </a>
          <a href="#" className={classes.link} onClick={() => handleScroll("projects")}>
            Projects
          </a>

          <a href="#" className={classes.link} onClick={() => handleScroll("skills")}>
            Skills
          </a>

          <a href="#" className={classes.link} onClick={() => handleScroll("skills")}>
            Skills
          </a>
          <a href="#" className={classes.link} onClick={() => handleScroll("contact")}>
            Contact me
          </a>
          
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Connect with Me
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>

      {/* <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" display={"grid"}>
          <Button
            href="#"
            className={classes.link}
            onClick={() => handleScroll("home")}
          >
            Home
          </Button>

          <Button
            href="#"
            className={classes.link}
            onClick={() => handleScroll("about")}
          >
            About
          </Button>

          <Button
            href="#"
            className={classes.link}
            onClick={() => handleScroll("projects")}
          >
            Projects
          </Button>

          <Button
            href="#"
            className={classes.link}
            onClick={() => handleScroll("skills")}
          >
            Skills
          </Button>

          <Button
            href="#"
            className={classes.link}
            onClick={() => handleScroll("contact")}
          >
            Contact Me
          </Button>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Connect with me
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer> */}
    </Box>
  );
}
