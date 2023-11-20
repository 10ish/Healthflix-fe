import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function DeleteModal({type, handleDelete, listItemId, show,  handleClose}){
  
    return(
        <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    {" "}
                    <Modal.Header closeButton>
                      <Modal.Title>Delete {type}?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      The {type} will be permanentaly deleted from the
                      database
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="danger"
                        onClick={()=>{
                            handleDelete(listItemId)
                        }}
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
    )

}