import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import { useEffect, useState } from "react";
import courseService from "./utils/service";
import CourseEditModal from "./components/CourseEditModal";
import CourseDeleteModal from "./components/CourseDeleteModal";

const MateriCRUD = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openEditModal = (courseData) => {
    setSelectedCourse(courseData);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedCourse({});
    setShowEditModal(false);
  };

  const handleUpdateCourse = (updatePayload) => {
    const { id, ...othersPayload } = updatePayload;
    courseService.updateCourse(id, othersPayload);
    closeEditModal();
    fetchCourses();
  };

  const openDeleteModal = (courseData) => {
    setSelectedCourse(courseData);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    const {id} = selectedCourse;
    courseService.deleteCourse(id)
    closeDeleteModal();
    fetchCourses()
  }

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };
  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  };
  const fetchCourses = () => {
    const response = courseService.getCourses();
    setCourses(response.data);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <Container className="pt-5">
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          <Button onClick={toggleCreateModal} className="mb-3">
            Add Course
          </Button>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => {
                return (
                  <tr key={course.id}>
                    <td>{index + 1}</td>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>
                      <Button
                        onClick={() => openEditModal(course)}
                        variant="warning"
                      >
                        Edit
                      </Button>
                      {' '}
                      <Button
                        onClick={() => openDeleteModal(course)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModal
        show={showCreateModal}
        handleClose={toggleCreateModal}
        handleSubmit={handleAddCourse}
      />
      <CourseEditModal
        show={showEditModal}
        handleClose={closeEditModal}
        handleSubmit={handleUpdateCourse}
        data={selectedCourse}
      />
      <CourseDeleteModal
        show={showDeleteModal}
        onAgree={handleDelete}
        handleClose={closeDeleteModal}
      />
    </Container>
  );
};

export default MateriCRUD;
