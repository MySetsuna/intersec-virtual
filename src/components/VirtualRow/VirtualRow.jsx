import React from "react";
import PropTypes from "prop-types";
import IntersectionObserverBox from "../../lib/IntersectionObserverBox/IntersectionObserverBox";
import styles from "./virtualRow.module.less";
import VirtualCell from "../VirtualCell/VirtualCell";

const VirtualRow = (props) => {
  const rowRef = React.useRef();
  const { totalWidth, columns, row, parentDom } = props;
  return (
    <IntersectionObserverBox
      ref={rowRef}
      parentDom={parentDom}
      className={styles.virtualRow}
      style={{ height: 32, width: totalWidth }}
    >
      {columns.map((column, index) => (
        <VirtualCell
          key={index}
          cellValue={row[column.columnKey]}
          column={column}
        />
      ))}
    </IntersectionObserverBox>
  );
};

VirtualRow.propTypes = {
  totalWidth: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  row: PropTypes.object.isRequired,
  parentDom: PropTypes.element,
};

export default VirtualRow;
