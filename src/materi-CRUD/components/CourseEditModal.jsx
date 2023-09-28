/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    const submitPayload = {
      id: data.id,
      name,
      description,
    };
    handleSubmit(submitPayload);
  };

  useEffect(() => {
    setDescription(data.description);
    setName(data.name);
  }, [data]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama course"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              defaultValue={description}
              as="textarea"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseEditModal;
