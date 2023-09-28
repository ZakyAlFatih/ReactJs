/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";

const CourseDeleteModal = ({show, handleClose, onAgree}) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={onAgree}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CourseDeleteModal;