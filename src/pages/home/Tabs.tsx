import Container from "@/components/shared/Container";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TransparentTabs() {
  const data = [
    {
      label: "Hourly",
      value: "Hourly",
      desc: `It really matters and then like it really doesn't matter.
       What matters is the people who are sparked by it. And the people 
       who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Daily",
      value: "Daily",
      desc: `Because it's about motivating the doers. Because I'm here
       to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Weekly",
      value: "Weekly",
      desc: `We're not always in the position that we want to be at.
       We're constantly growing. We're constantly making mistakes. We're
       constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Monthly",
      value: "Monthly",
      desc: `Because it's about motivating the doers. Because I'm here
       to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <Container>
      <Tabs value="html" className=" py-5">
        {/* @ts-ignore */}
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-gray-900/10 shadow-none !text-gray-900",
          }}
        >
          {data.map(({ label, value }) => (
            //@ts-ignore
            <Tab
              className="border border-[#0E200E] rounded-md"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {/* @ts-ignore */}
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Container>
  );
}
