import Modal from "react-modal"
import FormEditUser from "./formEditUser"

const ModalEditUser = (props: any) => {
    const { userEdit, modal, closeModal } = props


    return (
        <Modal
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                    position: 'absolute',
                    top: '15%',
                    left: '15%',
                    right: '15%',
                    bottom: 'auto',
                    border: '1px solid #000',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}
            ariaHideApp={false}
            isOpen={modal.edit}
            onRequestClose={closeModal}
            className=""
            contentLabel="Example Modal"
        >
            <div className='row'>
                <div className='col d-flex  justify-content-start'>   <h2>Edit User</h2>  </div>
                <div className='col d-flex  justify-content-end'>    <button className='btn btn-danger' onClick={closeModal}>x</button></div>
            </div>
            <div className='row mt-4  me-2  ms-2'>
                <div className="col col-lg-12 " >
                    <div className="row">
                        <FormEditUser userEdit={userEdit} />
                        {/* <p>{userEdit}</p> */}
                        {/* <FormEditProduct closeModalEdit={closeModalEdit} setReload={setReload} categories={categories} product={product} /> */}
                    </div>
                </div>
            </div>

        </Modal >
    )
}

export default ModalEditUser;
