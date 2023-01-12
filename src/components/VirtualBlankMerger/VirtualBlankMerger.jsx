import React from "react";
import PropTypes from "prop-types";

const VirtualBlankMerger = (props) => {
  React.useEffect(() => {
    props.children.forEach((node) => {
      console.log(node);
    });
  }, [props.children]);
  return <div>{props.children}</div>;
};

VirtualBlankMerger.propTypes = {};

export default VirtualBlankMerger;
