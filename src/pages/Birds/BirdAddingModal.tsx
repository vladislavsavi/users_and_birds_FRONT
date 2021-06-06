import { Modal, Form, Input, Button } from "antd";
import { FC } from "react";
import { useAxios } from "../../utils";
import { BirdModel } from "./models";

interface Props {
  isModalVisible: boolean;
  handleCancel: () => void;
  onTableReload: () => void;
}

export const BirdAddingModal: FC<Props> = ({
  isModalVisible,
  handleCancel,
  onTableReload,
}) => {
  const axios = useAxios();

  const handleOk = (bird: BirdModel) => {
    axios
      .post("/bird/create", bird)
      .then(onTableReload)
      .catch((err) => console.error(err))
      .finally(handleCancel);
  };

  return (
    <Modal
      title="Add Bird"
      visible={isModalVisible}
      okButtonProps={{ disabled: true }}
      onCancel={handleCancel}
      footer={[
        <Button type="primary" form="add_bird" key="submit" htmlType="submit">
          Add
        </Button>,
        <Button onClick={handleCancel} type="dashed">
          Cancel
        </Button>,
      ]}
    >
      <Form
        onFinish={handleOk}
        name="add_bird"
        initialValues={{ remember: false }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input bird name",
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input bird description",
            },
          ]}
        >
          <Input placeholder="Description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
