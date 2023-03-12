import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap-v5'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const FormReceiver = (props) => {
    const { infoUser, setInfoUser } = props
    const [show, setShow] = useState(false)
    const [infoReceiver, setInfoReceiver] = useState({ name: '', phone: '' })
    const [counter, setCounter] = useState(60)
    const [isCoutdown, setIsCoutdown] = useState(false)
    const [isShowInfo, setIsShowInfo] = useState(false)
    const [colorBtn, setColorBtn] = useState('primary')
    const [selectBox, setBox] = useState('')

    useEffect(() => {
        let timeout = null
        if (isCoutdown > 0 && counter) {
            timeout = setTimeout(() => {
                console.log(counter)
                setCounter(counter - 1)
            }, 1000)
        }
        if (timeout !== null) {
            return () => clearTimeout(timeout)
        }
    }, [isCoutdown, counter])

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true)
    const handleReceiv = () => {
        setShow(false)
        toast.success('Nhận hàng thành công !', {
            position: toast.POSITION.TOP_RIGHT,
        })
        setInfoReceiver({ name: '', phone: '' })
        setIsShowInfo(false)
        setBox('')
        setIsCoutdown(false)
        setCounter(5)
        if (selectBox !== '') {
            let cloneColor = { ...infoUser }
            cloneColor[selectBox].name = ''
            cloneColor[selectBox].phone = ''
            cloneColor[selectBox].colorItem = 'success'
            setInfoUser(cloneColor)
        }
    }
    console.log(infoUser)
    const handleCoutdown = () => {
        setIsCoutdown(true)
        setColorBtn('secondary')
    }
    const handleSubmit = () => {
        for (const item in infoUser) {
            if (infoUser[item].phone === infoReceiver.phone && infoReceiver.phone) {
                setInfoReceiver((prev) => ({ ...prev, name: infoUser[item].name }))
                setIsShowInfo(true)
                setBox(item)
            }
        }
    }
    return (
        <div>
            <>
                <Button variant='primary' onClick={handleShow}>
                    Người nhận
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nhập thông tin của bạn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Nhập số điện thoại của bạn</Form.Label>
                                <div className='flex gap-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Nhập số điện thoại của bạn'
                                        value={infoReceiver.phone}
                                        onChange={(e) =>
                                            setInfoReceiver((prev) => ({ ...prev, phone: e.target.value }))
                                        }
                                    />
                                    <Button variant={colorBtn} onClick={() => handleCoutdown()}>
                                        {isCoutdown ? <p>{counter}</p> : 'OTP'}
                                    </Button>
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Nhập mã OTP</Form.Label>
                                <Form.Control type='text' placeholder='Nhập mã OTP' />
                            </Form.Group>
                            <Button variant='primary' onClick={() => handleSubmit()}>
                                Xác nhận
                            </Button>
                        </Form>
                        {isShowInfo ? (
                            <div className=''>
                                <p>Họ và Tên: {infoReceiver.name}</p>
                                <p>Số điện thoại: {infoReceiver.phone}</p>
                                <p>Đơn hàng của bạn ở hộp: {selectBox}</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='primary' onClick={() => handleReceiv()}>
                            Nhận hàng
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default FormReceiver
