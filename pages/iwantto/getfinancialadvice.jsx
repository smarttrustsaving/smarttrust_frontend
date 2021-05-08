import React from "react";
import { useRouter } from "next/router";
import Loading from "../../client/components/Loading";

const Financial = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/products/financialadvice");
  }, []);

  return <Loading />;
};

export default Financial;
