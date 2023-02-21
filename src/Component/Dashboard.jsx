import React, { useState } from "react"
import FormReceiver from "./Receiver/FormReceiver"
import FormSender from "./Sender/FormSender"

const Dashboard = () => {
    const [select, setSelect] = useState("")
    const [infoUser, setInfoUser] = useState({
        1: { colorItem: "success", name: "", phone: "" },
        2: { colorItem: "success", name: "", phone: "" },
        3: { colorItem: "success", name: "", phone: "" },
        4: { colorItem: "success", name: "", phone: "" },
        5: { colorItem: "success", name: "", phone: "" },
        6: { colorItem: "success", name: "", phone: "" },
        7: { colorItem: "success", name: "", phone: "" },
        8: { colorItem: "success", name: "", phone: "" },
        9: { colorItem: "success", name: "", phone: "" },
    })
    return (
        <div className='main mt-10'>
            <h1 className='mt-3 font-bold text-3xl'>Hộp giao hàng thông minh</h1>
            <div className='flex justify-center mt-[150px] gap-[150px]'>
                <FormSender
                    select={select}
                    setSelect={setSelect}
                    infoUser={infoUser}
                    setInfoUser={setInfoUser}></FormSender>
                <FormReceiver select={select} infoUser={infoUser}></FormReceiver>
            </div>
        </div>
    )
}

export default Dashboard
