import { ActionIcon, Group, rem } from "@mantine/core";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import classes from "./FooterLinks.module.css";

export function FooterLinks() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWraper}>
        <div className={classes.rightsDiv}>
          Designed and build by Shubham Chauhan © 2024. All rights reserved.
        </div>

        <Group
          gap={rem(10)}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <a href="mailto:chauhanshubham19765@gmail.com" target="_blank"  rel="noreferrer">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconMail
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>

          <a href="https://github.com/ChauhanShubham8758" target="_blank"  rel="noreferrer">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-s-chauhan/"
            target="_blank"
            rel="noreferrer"
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>

          <a href="https://wa.me/919106909466" target="_blank"  rel="noreferrer">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandWhatsapp
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
        </Group>
      </div>
    </footer>
  );
}
