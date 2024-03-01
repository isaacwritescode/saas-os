import { BiBrush, BiServer, BiSliderAlt } from "react-icons/bi";

const FEATURES = [
  {
    icon: <BiBrush />,
    label: "UI DESIGNER",
    title: "AI Assisted UI Development",
    desc: `
        With over 300+ UI components catering to 90% of use cases, our AI-assisted UI development tool empowers you to create engaging and responsive user interfaces.
        \n
For those unique requirements, custom components can be seamlessly developed and integrated, ensuring your application stands out in the market.
        `,
    lottie: "/animations/1.lottie",
  },
  {
    icon: <BiSliderAlt />,
    label: "WORKFLOW",
    title: "Intelligent API and Workflow Integration",
    desc: `
    SaaS OS simplifies the creation of REST and GraphQL APIs, workflows, and third-party integrations, all without writing a single line of code.
    
    Our intelligent zero-code approach means you can focus on strategy and innovation, rather than getting bogged down in technical details.
        `,
    lottie: "/animations/2.lottie",
  },
  {
    icon: <BiServer />,
    label: "ENVIRONMENTS",
    title: "Zero-Ops Environments",
    desc: `
    Our customers have zero operational overhead of managing development, demo, staging, and production environments.
    \n
    SaaS OS offers a zero-ops solution that automates these processes, significantly reducing the complexity and cost of operations while ensuring your environments are always optimized for performance.`,
    lottie: "/animations/3.lottie",
  },
];

export default FEATURES;
