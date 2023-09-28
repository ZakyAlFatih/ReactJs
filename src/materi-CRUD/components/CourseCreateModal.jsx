/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseCreateModal = ({show, handleClose, handleSubmit}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const submit = () => {
        const timeStamp = Math.floor(Date.now() / 1000);
        const submitPayload = {
            id: timeStamp,
            name,
            description
        }
        // console.log('submit', submitPayload)
        handleSubmit(submitPayload)
    }
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
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
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} rows={3} />
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
}

export default CourseCreateModal;