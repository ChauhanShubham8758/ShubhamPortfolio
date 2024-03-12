import { ActionIcon, Group, rem } from "@mantine/core";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./FooterLinks.module.css";

export function FooterLinks() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWraper}>
        <div className={classes.rightsDiv}>© 2024 Shubham Chauhan. All rights reserved.</div>

        <Group
          gap={rem(10)}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconMail
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
