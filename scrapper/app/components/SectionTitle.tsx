import React from "react";

type Props = {
  title: string;
  break: string;
};

const SectionTitle = (props: Props) => {
  return (
    <h2 className="text-3xl font-bold mb-4">
      {props.title} <br></br>
      {props.break}
    </h2>
  );
};

export default SectionTitle;
