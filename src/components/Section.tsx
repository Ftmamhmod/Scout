import {
  FaRegSquare,
  FaRegCircle,
  FaRegEnvelope,
  FaRegCommentDots,
} from "react-icons/fa";
import { SiDeno, SiLinear, SiModal } from "react-icons/si";

const companiesTop = [
  {
    name: "",
    logo: "",
  },
  {
    name: "Statsig",
    logo: (
      <span className="font-bold flex items-center gap-2">
        <FaRegSquare className="text-black bg-white rounded-md p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        STATSIG
      </span>
    ),
  },
  {
    name: "Deno",
    logo: (
      <span className="font-bold flex items-center gap-2">
        <SiDeno className="text-black bg-white rounded-full p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        Deno
      </span>
    ),
  },
  {
    name: "Modal",
    logo: (
      <span className="font-bold flex items-center gap-2">
        <SiModal className="text-black bg-white rounded-md p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        Modal
      </span>
    ),
  },
  {
    name: "hyper",
    logo: (
      <span className="font-bold flex items-center gap-2">
        <FaRegCommentDots className="text-black bg-white rounded-md p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        hyper
      </span>
    ),
  },
  {
    name: "",
    logo: "",
  },
];

const companiesBottom = [
  {
    name: "",
    logo: "",
  },
  {
    name: "evidence",
    logo: (
      <span className="font-semibold flex items-center gap-2">
        <FaRegEnvelope className="text-black bg-white rounded-md p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        evidence
      </span>
    ),
  },
  {
    name: "dagster",
    logo: (
      <span className="font-semibold flex items-center gap-2">
        <FaRegCircle className="text-black bg-white rounded-full p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        dagster
      </span>
    ),
  },
  {
    name: "case status",
    logo: (
      <span className="font-semibold flex items-center gap-2">
        <SiLinear className="text-black bg-white rounded-md p-1 text-[20px] sm:text-[24px] md:text-[32px]" />{" "}
        case status
      </span>
    ),
  },
  {
    name: "DFG SOUTH",
    logo: <span className="font-bold flex items-center gap-2">DFG SOUTH</span>,
  },
  {
    name: "",
    logo: "",
  },
];

const Section = () => {
  return (
    <section className="py-12 ">
      <div className="grid grid-cols-3 md:grid-cols-6  mb-6">
        {companiesTop.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center h-20 opacity-70 general-border"
          >
            {company.logo}
          </div>
        ))}
      </div>
      <div className="text-center text-2xl md:text-3xl font-medium text-white mb-10 md:p-12  ">
        Used by teams at Statsig, Deno, Modal, hyper, evidence, dagster, case
        status, DFG SOUTH
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6">
        {companiesBottom.map((company) => (
          <div
            key={company?.name}
            className="flex items-center justify-center h-20 opacity-50 general-border"
          >
            {company?.logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
