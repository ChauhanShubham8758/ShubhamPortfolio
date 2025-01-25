import { Timeline, Text } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";
import {  IconMapPin } from "@tabler/icons-react";
// import { ImLocation2 } from "react-icons/im";

export default function WorkExperience() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<IconCode size={12} />}
        title="Software Engineer"
        pb={"35px"}
      >
        <Text c="dimmed" size="md">
          Radixweb
        </Text>
        <Text size="xs" mt={4}>
          Jan 2025 - Present
          <div>
          Ahmedabad - Gujarat
          </div>
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<IconCode size={12} />}
        title="Software Developer"
        pb={"35px"}
      >
        <Text c="dimmed" size="md">
          Binary Republik
        </Text>
        <Text size="xs" mt={4}>
          June 2024 - Dec 2024
          <div>
          Ahmedabad - Gujarat
          </div>
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Jr. Software Developer"
        bullet={<IconCode size={12} />}
      >
        <Text c="dimmed" size="md">
          Bigscal Technologies Pvt. Ltd. 
        </Text>

        <Text size="xs" mt={4}>
          Dec 2021- May 2024
          <div>
          Surat - Gujarat
          </div>
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
