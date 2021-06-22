import { FC, useEffect, useState, useCallback } from "react";
import { Button, Space, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useAxios } from "../../utils";
import { BirdModel } from "./models";
import { BirdAddingModal } from "./BirdAddingModal";

import "./birds.scss";

const getColumns = (onRemove: (id: string) => void) => [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "description", dataIndex: "description", key: "description" },
  {
    width: 100,
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (bird: BirdModel) => [
      <Button type="link" icon={<EditOutlined />} />,
      <Button
        onClick={() => onRemove(bird._id as string)}
        type="link"
        icon={<DeleteOutlined />}
      />,
    ],
  },
];

export const Birds: FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [birds, setBirds] = useState<BirdModel[]>();
  const axios = useAxios();

  const getAllBirds = useCallback(async () => {
    try {
      setLoading(true);
      const { data: birds } = await axios.get("/bird/list");
      setBirds(birds);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [axios]);

  const onRemove = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`/bird?id=${id}`);
      await getAllBirds();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllBirds();
  }, [getAllBirds]);

  return (
    <>
      <Space size="large" className="birds__actions-space">
        <Button
          onClick={() => setShowAddModal(true)}
          size="large"
          type="dashed"
          icon={<PlusCircleOutlined />}
        />
      </Space>
      <Table
        loading={loading}
        bordered
        columns={getColumns(onRemove)}
        dataSource={birds}
      />
      <BirdAddingModal
        onTableReload={getAllBirds}
        isModalVisible={showAddModal}
        handleCancel={() => setShowAddModal(false)}
      />
    </>
  );
};
