import Link from "next/link";

const Section = ({ title, children, padding, link }) => {
  const p = padding ? "py-5" : " ";
  const view = link ? (
    <div className="viewMore">
      <Link href={`${link}`} className="text-primary">
        view more
      </Link>
    </div>
  ) : null;

  return (
    <div className={`px-md-5 ${p}`}>
      <span className="sectionTitle">{title}</span>
      <div>{children}</div>
      {view}
    </div>
  );
};

export default Section;
