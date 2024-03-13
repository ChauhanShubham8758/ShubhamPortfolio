
import { Timeline, Text } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

export default function Education() {
  
  return (
    <Timeline active={3} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconSchool size={12} />} title="Masters in Computer Applications">
        <Text c="dimmed" size="md">Sardar Patel University (8.6 CGPA)</Text>
        <Text size="xs" mt={4}>2020-2022</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconSchool size={12} />} title="Bacholor's in Computer Applications">
        <Text c="dimmed" size="md">Veer Narmad South Gujrat University (7.9 CGPA)</Text>
        <Text size="xs" mt={4}>2017-2020</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconSchool size={12} />} title="H.S.C">
        <Text c="dimmed" size="md">Saraswati Hindi Vidhyalay (83%)</Text>
        <Text size="xs" mt={4}>2016-2017</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconSchool size={12} />} title="S.S.C">
        <Text c="dimmed" size="md">Saraswati Hindi Vidhyalay (76.5%)</Text>
        <Text size="xs" mt={4}>2014-2015</Text>
      </Timeline.Item>
    </Timeline>
  );
}