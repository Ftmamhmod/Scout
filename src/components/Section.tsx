const companiesTop = [
  {
    name: "",
    logo: "",
  },
  {
    name: "Statsig",
    logo: (
      <span className="font-bold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <rect width="24" height="24" rx="6" fill="#fff" />
          <path
            d="M6 16l3-8 3 8 3-8 3 8"
            stroke="#222"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        STATSIG
      </span>
    ),
  },
  {
    name: "Deno",
    logo: (
      <span className="font-bold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <circle cx="12" cy="12" r="8" fill="#222" />
        </svg>
        Deno
      </span>
    ),
  },
  {
    name: "Modal",
    logo: (
      <span className="font-bold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <rect width="24" height="24" rx="6" fill="#fff" />
          <path d="M6 12h12M12 6v12" stroke="#222" strokeWidth="2" />
        </svg>
        Modal
      </span>
    ),
  },
  {
    name: "hyper",
    logo: (
      <span className="font-bold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <rect width="24" height="24" rx="6" fill="#fff" />
          <path d="M8 12h8" stroke="#222" strokeWidth="2" />
        </svg>
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
      <span className="font-semibold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <rect width="24" height="24" rx="6" fill="#fff" />
          <path d="M6 12h12" stroke="#222" strokeWidth="2" />
        </svg>
        evidence
      </span>
    ),
  },
  {
    name: "dagster",
    logo: (
      <span className="font-semibold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <circle cx="12" cy="12" r="8" fill="#222" />
        </svg>
        dagster
      </span>
    ),
  },
  {
    name: "case status",
    logo: (
      <span className="font-semibold text-lg flex items-center gap-2">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block"
        >
          <rect width="24" height="24" rx="6" fill="#fff" />
          <path d="M6 12h12" stroke="#222" strokeWidth="2" />
        </svg>
        case status
      </span>
    ),
  },
  {
    name: "DFG SOUTH",
    logo: (
      <span className="font-bold text-lg flex items-center gap-2">
        DFG SOUTH
      </span>
    ),
  },
  {
    name: "",
    logo: "",
  },
];

const Section = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center  general-border">
      <div className="grid grid-cols-4 md:grid-cols-6 opacity-60 mb-10 w-full general-border">
        {companiesTop.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center h-20 opacity-60 general-border"
          >
            {company.logo}
          </div>
        ))}
      </div>
      <div className="text-center text-2xl md:text-3xl font-medium text-white mb-10">
        Used by teams at Statsig, Deno, <br />
        Dagster, Evidence and more.
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 w-full opacity-60 general-border">
        {companiesBottom.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center h-20 opacity-70  general-border"
          >
            {company.logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
