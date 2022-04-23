import { Avatar, Card, Modal } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

const ModalView = ({ getPokemon, isModalVisible, setIsModalVisible, id }) => {
  console.log(getPokemon);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        title={getPokemon[id].name.toUpperCase()}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          style={{ width: 475 }}
          cover={
            <img
              style={{ width: "250px", margin:"auto" }}
              alt={getPokemon[id].name}
              src={getPokemon[id].sprites.other.dream_world.front_default}
            />
          }
        >
          <Meta
            avatar={
              <Avatar
                src={getPokemon[id].sprites.other.dream_world.front_default}
              />
            }
            title={getPokemon[id].name.toUpperCase()}
          />
          <Meta
            description={`Base Experience: ${getPokemon[id].base_experience}`}
          />
          <Meta
            style={{ marginLeft: "48px" }}
            description={`Height: ${getPokemon[id].height}`}
          />
          <Meta
            style={{ marginLeft: "48px" }}
            description={`Weight: ${getPokemon[id].weight}`}
          />
          <Meta
            style={{ marginLeft: "48px" }}
            description={`Type: ${
              getPokemon[id].types[0].type.name.charAt(0).toUpperCase() +
              getPokemon[id].types[0].type.name.slice(1)
            }`}
          />
        </Card>
      </Modal>
    </div>
  );
};

export default ModalView;
