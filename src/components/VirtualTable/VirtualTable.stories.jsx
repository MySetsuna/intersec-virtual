import { Random } from "mockjs";
import React from "react";
import VirtualTable from "./VirtualTable";
export default {
  title: "Example/VirtualTable",
  component: VirtualTable,
  parameters: {
    rows: 100,
  },
};

const Template = (args) => <VirtualTable {...args} />;

export const Big = Template.bind({});
Big.args = {
  rows: new Array(10000).fill(0).map((_, index) => {
    const value = {};
    const columnKeys = new Array(50).fill(0).map((_, index) => index);
    columnKeys.forEach((item) => (value[item] = Random.cname()));
    return value;
  }),
  columns: new Array(50).fill(0).map((_, index) => {
    return {
      columnKey: index,
      title: `标题${index}`,
      titleComponent: undefined,
      titleProps: {},
      cellComponent: <input />,
      cellProps: {},
      sort: () => {},
      sortValue: undefined,
      isFixed: !(index % 5) ? true : false,
      style: {
        width: 300,
        padding: "5px 10px",
        boxSizing: "border-box",
      },
    };
  }),
};

export const Small = Template.bind({});
Small.args = {
  rows: new Array(50).fill(0).map((_, index) => {
    const value = {};
    const columnKeys = new Array(50).fill(0).map((_, index) => index);
    columnKeys.forEach((item) => (value[item] = Random.cparagraph()));
    return value;
  }),
  columns: new Array(5).fill(0).map((_, index) => {
    return {
      columnKey: index,
      title: `标题${index}`,
      titleComponent: undefined,
      titleProps: {},
      cellComponent: <input />,
      cellProps: {},
      sort: () => {},
      sortValue: undefined,
      isFixed: !(index % 5) ? true : false,
      style: {
        width: 300,
        padding: "5px 10px",
        boxSizing: "border-box",
      },
    };
  }),
};
