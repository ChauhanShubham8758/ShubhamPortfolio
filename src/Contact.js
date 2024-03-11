import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Image,
} from "@mantine/core";
import classes from "./Contact.module.css";

export function ContactUs() {
  return (
    <div className={classes.contactParentDiv}>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={50}
        className={classes.contactContainer}
        >
        <div className={classes.socialMedia}>
          <Title>Get in touch</Title>
          <Text mt="sm">
            If you wish to react out to me please feel free to leave your mail here
          </Text>
          <Image
            radius="md"
            h={400}
            w="100%"
            fit="contain"
            src="https://res.cloudinary.com/dcmpkhero/image/upload/v1709723761/projects/wzjl7f8indce5fyufhzq.jpg"
          />

        </div>
        <div className={classes.contactForm}>
          <TextInput label="Email" placeholder="your@email.com" required />
          <TextInput label="Name" placeholder="John Doe" mt="md" />
          <Textarea
            required
            label="Your message"
            placeholder="Drop your message here"
            minRows={4}
            mt="md"
          />

          <Group justify="flex-end" mt="md">
            <Button>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
