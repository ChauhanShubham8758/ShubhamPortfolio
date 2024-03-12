import { Timeline, Text } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';

export default function WorkExperience() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconCode size={12} />} title="Dotnet Core Developer" pb={'35px'}>
        <Text c="dimmed" size="md">
        Bigscal Technologies Pvt. Ltd.
          </Text>
        <Text size="xs" mt={4}>
        March 2023 - Present
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCode size={12} />} title="Asp.net MVC & Blazor Developer" pb={'35px'}>
      <Text c="dimmed" size="md">
        Bigscal Technologies Pvt. Ltd.
          </Text>
          <Text size="xs" mt={4}>
        June 2022 - March 2023
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Internship (Dotnet Core)" bullet={<IconCode size={12} />}>
      <Text c="dimmed" size="md">
        Bigscal Technologies Pvt. Ltd.
          </Text>
          <Text size="xs" mt={4}>
        Dec 2021- May 2022
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}