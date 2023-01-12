import React from "react";
import styles from "./virtualTable.module.less";
import PropTypes from "prop-types";
import IntersectionObserverBox from "../../lib/IntersectionObserverBox/IntersectionObserverBox";
import VirtualRow from "../VirtualRow";

const VirtualTable = (props) => {
  const { rows, columns } = props;
  const tableBodyRef = React.useRef();

  const totalWidth = React.useMemo(() => {
    let totalWidth = 0;
    columns.forEach((element) => {
      totalWidth += element.style?.width;
    });
    return totalWidth;
  }, [columns]);

  return (
    <div className={styles.virtualTable}>
      <div className="header">
        {columns.map(({ title, style }, index) => (
          <div
            className="header-item"
            key={index}
            style={{ ...style, padding: 10, boxSizing: "border-box" }}
          >
            {title}
          </div>
        ))}
      </div>
      <div ref={tableBodyRef}>
        {rows.map((row, index) => (
          <VirtualRow
            key={index}
            row={row}
            columns={columns}
            totalWidth={totalWidth}
            parentDom={tableBodyRef.current}
          />
        ))}
      </div>
    </div>
  );
};

VirtualTable.propTypes = {
  columns: PropTypes.arrayOf(
    (propValue, key, componentName, location, propFullName) => {
      const err = [];
      let errStr = "";
      const rueslut = [
        "columnKey",
        "title",
        "titleComponent",
        "titleProps",
        "cellComponent",
        "cellProps",
        "sort",
        "sortValue",
        "isFixed",
      ].every((item) => {
        const r = Object.prototype.hasOwnProperty.call(propValue[key], item);
        if (r) return r;
        err.push(item);
        errStr += `${item}  `;
        return false;
      });
      return rueslut ? true : new Error(`缺少字段: ${errStr}`);
    }
  ),
  //   columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default VirtualTable;
