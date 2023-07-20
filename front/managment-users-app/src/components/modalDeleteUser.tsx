import Modal from "react-modal"
import FormDeleteUser from "./formDeleteUser"

const ModalDeleteUser = (props: any) => {
    const { modal, closeModal, user, token } = props
    return (
        <Modal
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0)'
                },
                content: {
                    position: 'absolute',
                    top: '30%',
                    left: '25%',
                    right: '25%',
                    bottom: '30%',
                    border: '1px solid #000',
                    color: '#fff',
                    backgroundColor: 'rgba(52, 58, 64, 1)',
                    overflow: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                }
            }}
            ariaHideApp={false}
            isOpen={modal.delete}
            onRequestClose={closeModal}
            className=""
            contentLabel="Example Modal"
        >
            <div className='row'>
                <div className='col d-flex  justify-content-end'>    <button className='btn btn-danger' onClick={closeModal}>x</button></div>
            </div>
            <div className='row '>
                <div className="col col-lg-12 " >
                    <div className="row">
                        <FormDeleteUser user={user} token={token} closeModal={closeModal} />
                    </div>
                </div>
            </div>
        </Modal >
    )
}

export default ModalDeleteUser;
