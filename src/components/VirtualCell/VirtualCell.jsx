import React from "react";
import PropTypes from "prop-types";
import IntersectionObserverBox from "../../lib/IntersectionObserverBox/IntersectionObserverBox";
import styles from "./virtualCell.module.less";
import classNames from "classnames";

const VirtualCell = (props) => {
  const { column, parentDom, cellValue } = props;
  const element = React.useMemo(() => {
    return React.cloneElement(column.cellComponent, {
      defaultValue: cellValue,
      style: { width: "100%" },
    });
  }, [cellValue, column]);
  return (
    <IntersectionObserverBox
      parentDom={parentDom}
      className={classNames(styles.virtualCell, column.className)}
      style={column.style}
    >
      {element}
    </IntersectionObserverBox>
  );
};

VirtualCell.propTypes = {
  cellValue: PropTypes.any,
  column: PropTypes.object.isRequired,
  parentDom: PropTypes.element,
};

export default VirtualCell;
