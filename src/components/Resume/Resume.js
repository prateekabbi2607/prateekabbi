import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Button,
  Title,
  Card,
  NumberInput,
  SimpleGrid,
  TextInput,
  Modal,
  Switch,
  Textarea,
} from "@mantine/core";
import { Plus, Pencil, Eraser } from "tabler-icons-react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Resume = () => {
  const [opened, setOpened] = useState(false);
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);

  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState(false);

  useEffect(() => {
    axios
      .get("https://prateekabbi-backend.herokuapp.com/resumeApi/resumeDetails")
      .then((data) => {
        setEducationArray(data.data.education);
        setExperienceArray(data.data.experience);
      });
  }, []);

  const updateResume = () => {
    axios.put("https://prateekabbi-backend.herokuapp.com/resumeApi/resume", {
      year,
      title,
      organization,
      description,
      experience,
    });
    setOpened(false);
  };

  return (
    <div style={{ padding: "26px 16px" }}>
      <Card
        shadow="lg"
        p="lg"
        style={{ backgroundColor: "#2a3748", marginBottom: 15 }}
      >
        {/* <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            // marginTop: "-50px",
            backgroundColor: "#2a3748",
          }}
        > */}
        <TableContainer sx={{ maxHeight: 315 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    width: "100px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Year
                </TableCell>
                <TableCell
                  style={{
                    width: "300px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  style={{
                    width: "225px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Organization
                </TableCell>
                <TableCell
                  style={{
                    width: "190px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educationArray.map((education) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={education._id}
                  >
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {education.year}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {education.title}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {education.organization}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      Education
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Paper> */}
      </Card>

      <Card shadow="lg" p="lg" style={{ backgroundColor: "#2a3748" }}>
        {/* <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            // marginTop: "-50px",
            backgroundColor: "#2a3748",
          }}
        > */}
        <TableContainer sx={{ maxHeight: 315 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    width: "100px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Year
                </TableCell>
                <TableCell
                  style={{
                    width: "300px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  style={{
                    width: "225px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Organization
                </TableCell>
                <TableCell
                  style={{
                    width: "190px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {experienceArray.map((experience) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={experience._id}
                  >
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {experience.year}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {experience.title}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {experience.organization}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      Experience
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Paper> */}
      </Card>

      <Button
        variant="outline"
        style={{
          color: "#f4c427",
          border: "2px solid #2a3748",
        }}
        leftIcon={<Plus />}
        sx={() => ({
          marginTop: 10,
          // position: "relative",
          zIndex: 3,
          float: "right",
          "&:hover": {
            backgroundColor: "#2a3748",
          },
        })}
        onClick={() => setOpened(true)}
      >
        Add
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add Experience or Education"
        centered
        styles={{ backgroundColor: "#2a3748 !important" }}
      >
        <TextInput
          label="Year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <TextInput
          value={title}
          label="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          style={{ marginTop: 10 }}
        />
        <TextInput
          value={organization}
          label="Organization Name"
          onChange={(event) => {
            setOrganization(event.target.value);
          }}
          style={{ marginTop: 10 }}
        />
        <Textarea
          value={description}
          label="Description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          style={{ marginTop: 10 }}
        />
        <Switch
          checked={experience}
          onChange={(event) => setExperience(event.currentTarget.checked)}
          label="Experience"
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
          onClick={updateResume}
        >
          Add
        </Button>
      </Modal>
    </div>
  );
};

export default Resume;
