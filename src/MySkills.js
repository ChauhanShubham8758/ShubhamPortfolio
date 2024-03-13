
import {
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "./MySkills.module.css";

export function MySkills({item}) {
  const theme = useMantineTheme();

  return (
    <UnstyledButton key={item.title} className={classes.item}>
    <item.icon color={theme.colors[item.color][6]} size="2rem" />
    <Text size="xs" mt={7}>
      {item.title}
    </Text>
  </UnstyledButton>
  );
}
