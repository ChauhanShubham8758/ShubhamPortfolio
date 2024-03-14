import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Image,
  rem
} from "@mantine/core";
import classes from "./Contact.module.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

export function ContactUs() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mail_subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_qm781ap", "template_5lw300e", values, "Vzg3CdkwzyTysFVX_")
      .then(
        (response) => {},
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact">
      <div className={classes.contactParentDiv}>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={50}
          className={classes.contactContainer}
          verticalSpacing={{ sm: 0 }}
        >
          <div className={classes.socialMedia}>
            <Title>Get in touch</Title>
            <Text mt="sm">
              If you wish to reach out to me please feel free to leave your mail
              here
            </Text>
            <Image
              radius="md"
              h={{ xs: 300, sm: 400, md: 400, lg: 400 }}
              w="100%"
              fit="contain"
              src="https://res.cloudinary.com/dcmpkhero/image/upload/v1710329795/projects/jiocbnb0wtym4femoacw.jpg"
            />
          </div>
          <div className={classes.contactForm}>
            <form onSubmit={handleSubmit}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                value={values.email}
                onChange={handleChange}
                name="email"
                required
              />
              <TextInput
                label="Name"
                placeholder="John Doe"
                value={values.fullName}
                onChange={handleChange}
                name="fullName"
                mt="md"
              />
              <TextInput
                label="Subject"
                placeholder="Your subject"
                mt="md"
                name="mail_subject"
                value={values.mail_subject}
                onChange={handleChange}
              />

              <Textarea
                required
                label="Your message"
                placeholder="Drop your message here"
                minRows={4}
                mt="md"
                name="message"
                value={values.message}
                onChange={handleChange}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit"
                  onClick={() => {
                    const id = notifications.show({
                      loading: true,
                      title: "Patience, Please! Your Message is on the Way.",
                      autoClose: false,
                      withCloseButton: false,
                    });

                    setTimeout(() => {
                      notifications.update({
                        id,
                        color: "teal",
                        title: "Your message has been sent",
                        message:
                          "Got it! I'll Keep an Eye on My Inbox. Thanks for Reaching Out!",
                        icon: (
                          <IconCheck
                            style={{ width: rem(18), height: rem(18) }}
                          />
                        ),
                        loading: false,
                        autoClose: 2000,
                      });
                    }, 3000);
                  }}
                >
                  Send email 
                </Button>
              </Group>
            </form>
          </div>
        </SimpleGrid>
      </div>
    </section>
  );
}
