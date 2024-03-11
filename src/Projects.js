import {
  Badge,
  Group,
  Title,
  Text,
  SimpleGrid,
  Container,
  Tabs,
  Center,
} from "@mantine/core";
import classes from "./Projects.module.css";
import { ProjectLists } from "./ProjectLists";
import { useState } from "react";

const mockdata = [
  {
    title: "Priority Couriers",
    description:
      "Developed RESTful APIs in .NET Core for Amazon Selling Partner integration.Designed and optimized database structures for improved performance.Implemented table structure based on amazon schema models.",
    technology: [
      ".NET Core",
      "SQL Server",
      "Stripe",
      "EF Core",
      "REST API",
      "Azure Devops",
      "xUnit Testing",
      "Cloudflare",
      "OData",
      "OAuth",
    ],
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1709888787/projects/iovfkg8k6rc448f66pdg.png",
    website: "https://www.prioritycouriers.com/",
    projectTypes: ["Dotnet Core"]
  },
  {
    title: "Dice Fanatics",
    description:
      "Developed an online marketplace for dice enthusiasts to buy, sell, and trade dice collections. It allows users to showcase their collections, connect with other dice fans, and search for specific dice sets. The platform facilitates secure transactions and includes features like friend requests and ISO (In Search Of) listings to help users find the dice they desire. Conducted xUnit testing, and provided debugging support.",
    technology: [
      ".NET Core",
      "SQL Server",
      "Stripe",
      "EF Core",
      "REST API",
      "Azure Devops",
      "xUnit Testing",
      "Cloudflare",
      "OData",
      "OAuth",
    ],
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1709707503/projects/h6u3ufzvngcdcxa7eqop.png",
    website: "https://play.google.com/store/apps/details?id=com.wogdmobile&pcampaignid=web_share",
    projectTypes: ["Dotnet Core"]
  },
  {
    title: "ErpCrebit",
    description:
      "ErpCrebit is an industry-wide computer software system used to manage and coordinate all the clients resources, information and functions of business from shared data stores. It includes payroll, free customization, Project Management, multi-process billing, licensing and cloud based enterprise resource planning for all business.",
    technology: [
      "Blazor & .Net Core 6",
      "SQL Server",
      "REST API",
      "TFS",
      "Asp.Net MVC",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Ajax",
    ],
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1709706174/projects/sjt6awdcp1eullbb73kh.jpg",
    website: "https://infiniti.erpcrebit.com/",
    projectTypes: ["Dotnet Core","dotnet mvc", "Blazor"]
  },
  {
    title: "Find Funder",
    description:
      "Developed an online platform connecting entrepreneurs with potential investors. Entrepreneurs can post their company details, including business plans and funding requirements, while investors can browse through listings to find suitable investment opportunities. Facilitated communication and negotiation between entrepreneurs and investors, including the ability for investors to provide counter offers. Improved efficiency in fundraising efforts and contributed to the growth of promising businesses.",
    technology: [
      ".NET Core",
      "SQL Server",
      "Stripe",
      "JWT",
      "EF Core",
      "REST API",
      "Azure Devops",
    ],
    logo: "https://res.cloudinary.com/dcmpkhero/image/upload/v1650866664/MyImages/logo_bbfkzq.png",
    website: "",
    projectTypes: ["Dotnet Core","react"]
  },
];

const projectTypes = ["all",...new Set(mockdata.flatMap(({projectTypes})=>projectTypes.map(Project=>Project.toLowerCase())))];

export function Projects() {
  const [activeTab,setActiveTab]=useState("all");

  const features = mockdata
    .filter(
      ({ projectTypes }) =>
        activeTab === "all" ||
        projectTypes.some((project)=>project.toLowerCase()===activeTab.toLowerCase())
    )
    .map((feature) => (
      <div key={feature.title}>
        <ProjectLists cardItem={feature} />
      </div>
    ));

  const tabs = projectTypes.map((item) => (
    <Tabs.Tab key={item} value={item}>
      {item.toUpperCase()}
    </Tabs.Tab>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          My Projects
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm" mb="sm">
        Discover My Creative Projects
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" m={"auto"}>
        Discover my passion for innovation through meticulously crafted
        projects, where creativity meets attention to detail.
      </Text>

      <Tabs defaultValue="all" variant="pills" onChange={setActiveTab}>
       
       <Tabs.List display="flex" justify="center" mt={30}>{tabs}</Tabs.List>

        {projectTypes.map((tabName)=>(
        <Tabs.Panel key={tabName} value={tabName}>
          <SimpleGrid cols={{ base: 1, md: 3, sm:2 }} spacing="xl" mt={50}>
            {features}
          </SimpleGrid>
        </Tabs.Panel>
        ))}
      </Tabs>
    </Container>
  );
}
