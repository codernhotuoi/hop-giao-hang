import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
const FormSender = (props) => {
    const { infoUser, setInfoUser, select, setSelect } = props
    const [show, setShow] = useState(false)
    const [info, setInfo] = useState({ name: '', phone: '' })
    // Mảng
    const arrSmall = [1, 4, 7]
    const arrMedium = [2, 5, 8]
    const arrBig = [3, 6, 9]

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const handleSubmitForm = () => {
        handleClose()
        let cloneColor = { ...infoUser }
        cloneColor[select].name = info.name
        cloneColor[select].phone = info.phone
        setInfoUser(cloneColor)
        setInfo({ name: '', phone: '' })
        setSelect('')
    }
    const handleChangeColor = (num) => {
        let cloneColor = { ...infoUser }
        cloneColor[num].colorItem = 'warning'
        setSelect(num)
        setInfoUser(cloneColor)
    }
    return (
        <div>
            <>
                <Button variant='primary' onClick={handleShow}>
                    Người gửi
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông tin người nhận</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Tên người nhận</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Nhập tên của khách hàng'
                                    value={info.name}
                                    onChange={(e) => setInfo((prev) => ({ ...prev, name: e.target.value }))}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Nhập số điện thoại của khách hàng'
                                    value={info.phone}
                                    onChange={(e) => setInfo((prev) => ({ ...prev, phone: e.target.value }))}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Vị trí ô <div>{`Bạn đã chọn ô ${select}`}</div>{' '}
                                </Form.Label>
                            </Form.Group>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nhỏ</th>
                                        <th>Vừa</th>
                                        <th>To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {arrSmall.map((item, index) => {
                                            return (
                                                <td key={index}>
                                                    <Button
                                                        onClick={() => handleChangeColor(item)}
                                                        variant={infoUser[item].colorItem}>
                                                        {item}
                                                    </Button>
                                                </td>
                                            )
                                        })}
                                    </tr>

                                    <tr>
                                        {arrMedium.map((item, index) => {
                                            return (
                                                <td key={index}>
                                                    <Button
                                                        onClick={() => handleChangeColor(item)}
                                                        variant={infoUser[item].colorItem}>
                                                        {item}
                                                    </Button>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                    <tr>
                                        {arrBig.map((item, index) => {
                                            return (
                                                <td key={index}>
                                                    <Button
                                                        onClick={() => handleChangeColor(item)}
                                                        variant={infoUser[item].colorItem}>
                                                        {item}
                                                    </Button>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            </Table>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant='primary' onClick={() => handleSubmitForm()}>
                            Xác nhận
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default FormSender
