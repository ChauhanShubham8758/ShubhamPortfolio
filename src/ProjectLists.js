import { Card, Image, Text, Group, Center } from "@mantine/core";
import classes from "./ProjectsLists.module.css";

export function ProjectLists({ cardItem }) {
  return (
    <Card withBorder radius="md" className={classes.card} key={cardItem.title}>
      <div>
        <a href={cardItem.website} target="_blank">
          <div>
            <Image
              src={cardItem.logo}
              className={classes.card_img}
              width={"100%"}
            />
          </div>
        </a>

        <Text className={classes.title} fw={"bold"} component={!!cardItem.website && "a"} href={cardItem.website} target="_blank">
          {cardItem.title}
        </Text>

        <Text className={classes.item_desc} fz="sm" c="dimmed">
          {cardItem.description}
        </Text>
      </div>
      <Group className={classes.footer}>
        <Center display={"block"}>
          <Text className={classes.techstacktitle} fw={"bold"}>
            TechStack :
          </Text>

          <Text className={classes.item_desc} fz="sm" c="dimmed">
            {cardItem.technology.join(", ")}
          </Text>
        </Center>
      </Group>
    </Card>
  );
}
