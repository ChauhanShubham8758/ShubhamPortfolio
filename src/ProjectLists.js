import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Center,
  Avatar,
 
} from '@mantine/core';
import classes from './ProjectsLists.module.css';

export function ProjectLists({cardItem}) {
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
  

  return (
    <Card withBorder radius="md" className={classes.card} key={cardItem.title}>
     
        <a {...linkProps}>
          {/* <Image src="https://res.cloudinary.com/dcmpkhero/image/upload/v1709706174/projects/sjt6awdcp1eullbb73kh.jpg" className={'card_img'}/> */}
          {/* <Image src="https://res.cloudinary.com/dcmpkhero/image/upload/v1709707503/projects/h6u3ufzvngcdcxa7eqop.png" className={'card_img'}/> */}
          <Image src="https://res.cloudinary.com/dcmpkhero/image/upload/v1709708037/projects/ppxk9o95gskxc4z1y25u.png" className={classes.card_img}/>
        </a>
      
      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        Resident Evil Village review
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very
        different direction to its predecessor, namely the fact that this time round instead of
        fighting against various mutated zombies, you’re now dealing with more occult enemies like
        werewolves and vampires.
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            Bill Wormeater
          </Text>
        </Center>
      </Group>
    </Card>
  );
}