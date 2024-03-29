import { FC } from "react";

interface Props {
  sidebar: React.ReactNode;
}

const DetailLayout: FC<Props> = (props) => {
  const { sidebar } = props;
  return <div>{sidebar}</div>;
};

export default DetailLayout;
