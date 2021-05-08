import Link from "next/link";

const PrimaryLink = ({ link, children }) => {
  return (
    <div>
      {link ? (
        <Link href={link}>
          <p role="button" className="py-4 text-primary h5">
            {children}
          </p>
        </Link>
      ) : (
        <p role="button" className="py-4 text-primary h5">
          {children}
        </p>
      )}
    </div>
  );
};

export default PrimaryLink;
