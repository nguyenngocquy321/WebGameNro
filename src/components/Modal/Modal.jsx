import { useContext } from 'react';
import ContentModal from './components/ContentModal';
import HeaderModal from './components/HeaderModal';
import { Modal, Button } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalProvider';
function ToastModal() {
    const { show, setShow } = useContext(ModalContext);
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                scrollable
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <HeaderModal />
                    <ContentModal />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default ToastModal;
