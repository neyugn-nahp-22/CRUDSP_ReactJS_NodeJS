import { Button, Input, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { UseItem } from "../../hooks";
import classNames from "classnames/bind";
import styles from "./Item.module.scss";

const cx = classNames.bind(styles);
export default function Items() {
  const {
    items,
    isLoading,
    handleSearchItem,
    handleGetItem,
    handleAddItem,
    handleDelItem,
    handlePutItem,
  } = UseItem();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [nameSearch, setDataSearch] = useState("");

  useEffect(() => {
    handleGetItem();
  }, []);

  return (
    <div>
      <div>
        <Input onChange={(e) => setName(e.target.value)} value={name} style={{ maxWidth: 300 }} />
        <Button
          onClick={() => {
            handleAddItem({ name: name });
          }}
        >
          ADD
        </Button>
      </div>
      <div>
        <Input
          onChange={(e) => setNameUpdate(e.target.value)}
          value={nameUpdate}
          style={{ maxWidth: 300 }}
        />
        <Button onClick={() => handlePutItem({ name: nameUpdate, id: id })}>UPDATE</Button>
      </div>
      <div>
        <Input onChange={(e) => setDataSearch(e.target.value)} style={{ maxWidth: 300 }} />
        <Button onClick={() => handleSearchItem({ nameSearch: nameSearch })}>SEARCH</Button>
      </div>
      <Table
        columns={[
          { title: "ID", dataIndex: "_id", key: "_id", width: 400 },
          { title: "NAME", dataIndex: "name", key: "name", width: 400 },
          {
            title: "ACTION",
            width: 400,
            align: "center",
            render: (record) => (
              <div className={cx("action-btn")}>
                <Button
                  className={cx("delete-btn")}
                  onClick={() => handleDelItem({ id: record._id })}
                >
                  <DeleteOutlined />
                </Button>
                <Button
                  className={cx("edit-btn")}
                  onClick={() => {
                    setNameUpdate(record.name);
                    setId(record._id);
                  }}
                >
                  <EditOutlined />
                </Button>
              </div>
            ),
          },
        ]}
        dataSource={items}
        loading={isLoading}
        rowKey="_id"
      ></Table>
    </div>
  );
}
