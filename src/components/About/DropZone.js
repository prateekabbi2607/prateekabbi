import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import { Button } from "@mantine/core";
import axios from "axios";

const DropZone = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (file) => {
    const formData = new FormData();
    formData.append("myFile", file, file.name);

    console.log(file);

    axios
      .put(
        "https://prateekabbi-backend.herokuapp.com/uploadImage/uploadAboutImage",
        formData
      )
      .then((data) => {
        /*console.log(data)*/
      });
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
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
        Add Image/Resume
      </Button>
      <DropzoneDialog
        style={{ backgroundColor: "#1d2b3c" }}
        open={open}
        onSave={(file) => {
          handleSave(file[0]);
          setFiles(file[0]);
        }}
        acceptedFiles={[
          "image/png",
          "image/jpg",
          "image/jpeg",
          "application/pdf",
        ]}
        showPreviews={true}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        onClose={handleClose}
        showFileNamesInPreview={true}
      />
    </div>
  );
};

export default DropZone;
