import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
  Title,
  Container,
  Tabs,
} from "@mantine/core";
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from "@tabler/icons-react";
import classes from "./SkillsSection.module.css";

const mockdata = [
  { title: "Credit cards", icon: IconCreditCard, color: "violet" },
  { title: "Banks nearby", icon: IconBuildingBank, color: "indigo" },
  { title: "Transfers", icon: IconRepeat, color: "blue" },
  { title: "Refunds", icon: IconReceiptRefund, color: "green" },
  { title: "Receipts", icon: IconReceipt, color: "teal" },
  { title: "Taxes", icon: IconReceiptTax, color: "cyan" },
  { title: "Reports", icon: IconReport, color: "pink" },
  { title: "Payments", icon: IconCoin, color: "red" },
  { title: "Cashback", icon: IconCashBanknote, color: "orange" },
];

const projectTypes = ["all", "front-end", "back-end"];
const tabs = projectTypes.map((item) => (
  <Tabs.Tab key={item} value={item}>
    {item}
  </Tabs.Tab>
));


export function SkillsSection() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <div className={classes.skillContainer}>
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm" mb="sm">
        My Technical Skills
      </Title>

      <Tabs defaultValue="all" variant="pills">
        <Tabs.List>{tabs}</Tabs.List>
        <Tabs.Panel value="all">
          <SimpleGrid cols={{ base: 1, md: 6 }} spacing="xl" mt={50}>
            {items}
          </SimpleGrid>
        </Tabs.Panel>
        <Tabs.Panel value="front-end">
          <Card withBorder radius="md" className={classes.card}>
            <Group justify="space-between">
              <Text className={classes.title}>Services</Text>
              <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                + 21 other services
              </Anchor>
            </Group>
            <SimpleGrid cols={7} mt="md">
              {items}
            </SimpleGrid>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Container>
    </div>
  );
}
