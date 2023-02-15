import React, { useState, useEffect } from "react";

import {
  Button,
  Card,
  NumberInput,
  SimpleGrid,
  TextInput,
  Modal,
  Textarea,
} from "@mantine/core";
import { Plus, Pencil, Eraser, DeviceFloppy } from "tabler-icons-react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import axios from "axios";

import DropZone from "./DropZone";
import UpdateModal from "./UpdateModal";

const skills = {};

const About = () => {
  const [skillsArray, setSkillsArray] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillProficiency, setSkillProficiency] = useState("");
  const [skillId, setSkillId] = useState("");
  const [description, setDescription] = useState("");
  const [resumeURL, setResumeURL] = useState("");
  const [opened, setOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://prateekabbi-backend.herokuapp.com/aboutApi/aboutDetails")
      .then((data) => {
        setEmail(data.data.email);
        setName(data.data.name);
        setNumber(data.data.number);
        setAddress(data.data.address);
        setDescription(data.data.description);
        setResumeURL(data.data.resumeURL);
        setSkillsArray(data.data.skills);
      });
  }, []);

  const handleSave = () => {
    console.log({
      email,
      name,
      number,
      address,
      description,
      resumeURL,
      skills,
    });
    axios
      .put("https://prateekabbi-backend.herokuapp.com/aboutApi/about", {
        email,
        name,
        number,
        address,
        description,
        resumeURL,
        skills,
      })
      .then((data) => {
        console.log(data);
      });
  };

  const addSkill = () => {
    skills["name"] = skillName;
    skills["percentage"] = skillProficiency;

    if (email && name && number < 9999999999 && address && skills) {
      axios
        .put("https://prateekabbi-backend.herokuapp.com/aboutApi/about", {
          email,
          name,
          number,
          address,
          description,
          resumeURL,
          skills,
        })
        .then((data) => {
          // console.log(data);
        });
    }
    setOpened(false);
  };

  const handleEdit = (id) => {
    const skill = skillsArray.find((data) => data._id == id);

    setSkillName(skill.name);
    setSkillId(id);
    setEditOpened(true);
  };

  const handleDelete = (id) => {
    axios.put(
      "https://prateekabbi-backend.herokuapp.com/aboutApi/deleteSkill",
      { id }
    );
  };

  return (
    <div style={{ padding: "26px 16px" }}>
      <SimpleGrid cols={2}>
        <Card shadow="lg" p="lg" style={{ backgroundColor: "#2a3748" }}>
          <TextInput
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            // error="Invalid Email"
          />
        </Card>

        <Card shadow="lg" p="lg" style={{ backgroundColor: "#2a3748" }}>
          <TextInput
            value={address}
            label="Address"
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Card>

        <Card shadow="lg" p="lg" style={{ backgroundColor: "#2a3748" }}>
          <TextInput
            value={name}
            label="Name"
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            onChange={(event) => setName(event.target.value)}
          />
        </Card>

        <Card shadow="lg" p="lg" style={{ backgroundColor: "#2a3748" }}>
          <Textarea
            value={description}
            label="Description"
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            minRows={2}
            maxRows={2}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Card>

        <Card
          shadow="lg"
          p="lg"
          style={{
            backgroundColor: "#2a3748",
          }}
        >
          <NumberInput
            value={number}
            hideControls
            label="Number"
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            onChange={(event) => setNumber(event.toString())}
          />
        </Card>

        <Card shadow="lg" p="lg" style={{ backgroundColor: "#2a3748" }}>
          <label
            className="mantine-1m21qwg mantine-TextInput-label"
            style={{
              fontFamily:
                "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
              lineHeight: 1.55,
            }}
          >
            Upload Profile Image/Resume
          </label>
          <div>
            <Button
              // onClick={() => console.log("hello")}
              variant="light"
              style={{ padding: 0 }}
              sx={() => ({
                color: "#fff",
                backgroundColor: "#2a3748",
                "&:hover": {
                  backgroundColor: "#2a3748",
                },
              })}
            >
              <DropZone />
            </Button>
          </div>
        </Card>

        <Card
          shadow="lg"
          p="lg"
          style={{
            backgroundColor: "#2a3748",
          }}
        >
          <TextInput
            value={resumeURL}
            hideControls
            label="Resume URL"
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            onChange={(event) => setResumeURL(event.target.value)}
          />
        </Card>

        <Button
          variant="outline"
          style={{
            color: "#f4c427",
            border: "2px solid #2a3748",
          }}
          rightIcon={<DeviceFloppy />}
          sx={() => ({
            zIndex: 3,
            float: "right",
            "&:hover": {
              backgroundColor: "#2a3748",
            },
          })}
          onClick={handleSave}
        >
          Save
        </Button>
      </SimpleGrid>

      <Plus
        size={30}
        strokeWidth={1}
        color={"#f4c427"}
        style={{
          position: "relative",
          top: 31,
          zIndex: 3,
          left: 1100,
          cursor: "pointer",
        }}
        onClick={() => {
          setOpened(true);
        }}
      />

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          marginTop: "-18px",
          backgroundColor: "#2a3748",
        }}
      >
        <TableContainer sx={{ maxHeight: 163 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    width: "275px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Unique Identification Code
                </TableCell>
                <TableCell
                  style={{
                    width: "300px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    width: "275px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Percentage
                </TableCell>
                <TableCell
                  style={{
                    // width: column.width,
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillsArray.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {row._id}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {row.percentage}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      <Pencil
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleEdit(row._id);
                        }}
                      />
                      <Eraser
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleDelete(row._id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add your skills"
        centered
        styles={{ backgroundColor: "#2a3748 !important" }}
      >
        <TextInput
          label="Skill Name"
          value={skillName}
          onChange={(event) => setSkillName(event.target.value)}
        />
        <NumberInput
          value={skillProficiency}
          hideControls
          label="Proficiency"
          onChange={(event) => {
            setSkillProficiency(event.toString());
          }}
          style={{ marginTop: 10 }}
        />
        <Button
          variant="subtle"
          style={{}}
          sx={() => ({
            marginTop: 10,
            paddingLeft: 0,
            "&:hover": {
              backgroundColor: "#fff",
            },
          })}
          onClick={addSkill}
        >
          Add
        </Button>
      </Modal>

      {editOpened && (
        <UpdateModal
          skillId={skillId}
          skillName={skillName}
          editOpened={editOpened}
          setEditOpened={setEditOpened}
        />
      )}
    </div>
  );
};

export default About;
