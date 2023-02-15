import React, { useState } from "react";
import axios from "axios";

import { Button, NumberInput, TextInput, Modal } from "@mantine/core";

const UpdateModal = ({ skillId, skillName, editOpened, setEditOpened }) => {
  const [percentage, setPercentage] = useState("");

  const updateSkill = () => {
    axios.put(
      "https://prateekabbi-backend.herokuapp.com/aboutApi/updateSkill",
      { skillId, percentage }
    );
    setEditOpened(false);
  };
  return (
    <Modal
      opened={editOpened}
      onClose={() => setEditOpened(false)}
      title="Update your skill"
      centered
      styles={{ backgroundColor: "#2a3748 !important" }}
    >
      <TextInput
        label="Skill Name"
        value={skillName}
        disabled
        // onChange={(event) => setSkillName(event.target.value)}
      />
      <NumberInput
        value={percentage}
        hideControls
        label="Proficiency"
        onChange={(event) => {
          setPercentage(event.toString());
        }}
        style={{ marginTop: 10 }}
      />
      <Button
        variant="subtle"
        sx={() => ({
          marginTop: 10,
          paddingLeft: 0,
          "&:hover": {
            backgroundColor: "#fff",
          },
        })}
        onClick={updateSkill}
      >
        Update
      </Button>
    </Modal>
  );
};

export default UpdateModal;
