import React, { useState } from "react";
import { Space, Tag, Input, Button } from "antd";
import { UserDetails } from "../Content";

export const useUserManagement = () => {
  const [data, setData] = useState(UserDetails);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(UserDetails);
  const [editingIds, setEditingIds] = useState({});
  const [inputValues, setInputValues] = useState({});

  const handleEditToggle = (record) => {
    setEditingIds((prev) => ({ ...prev, [record.key]: !prev[record.key] }));
    setInputValues((prev) => ({ ...prev, [record.key]: record.name }));
  };

  const updateNameByKey = (record) => {
    if (inputValues[record.key]) {
      const updatedData = data.map((item) =>
        item.key === record.key
          ? { ...item, name: inputValues[record.key] }
          : item
      );
      setData(updatedData);
      setFilteredData(updatedData);
    }
    setEditingIds((prev) => ({ ...prev, [record.key]: false }));
  };

  const handleDelete = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return editingIds[record.key] ? (
          <Input
            value={inputValues[record.key] || ""}
            onChange={(e) => {
              setInputValues((prev) => ({
                ...prev,
                [record.key]: e.target.value,
              }));
            }}
            onBlur={() => updateNameByKey(record)}
          />
        ) : (
          <a className="name-column">{text}</a>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tag) => (
        <Tag color={tag === "Inactive" ? "volcano" : "green"} key={tag}>
          {tag}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          
          <Button
            className="action-btn"
            type="link"
            style={{ margin: "0", padding: "0" }}
            onClick={() => {
              handleEditToggle(record);
            }}
          >
            Edit
          </Button>
          <Button
            className="action-btn"
            type="link"
            style={{ margin: "0", padding: "0" }}
            onClick={() => {
              handleDelete(record.key);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // Function to handle search input
  const handleUserSearch = (value) => {
    setSearchText(value);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return { searchText, handleUserSearch, columns, filteredData };
};
