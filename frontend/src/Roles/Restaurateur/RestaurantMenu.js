import React, { useState } from 'react'
import { GrAdd } from "react-icons/gr";
import RestaurantAddMenu from "./RestaurantAddMenu"
import { Modal } from 'reactstrap';
import './Restaurateur.css'

function RestaurantMenu() {
    // const [show, setShow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const toggle = () => setModalOpen(!modalOpen);

    return (
        <div>
            <div className="r-profile-menu">
                    <div className="type-card" style={{display:"flex"}}>
                        <h3 style={{margin:"0 20px 0 0"}}>Menu</h3>
                        <button 
                            style={{color:"white",background:"var(--beta-color)"}}
                            onClick={toggle}
                        >Add Menu</button>
                    </div>
                    <Modal
                    isOpen={modalOpen}
                    toggle={() => setModalOpen(!modalOpen)}
                    >
                    <RestaurantAddMenu/>
                    </Modal>
                    <div className="type-card">
                        <h4>Type 1</h4>
                        <div style={{display:"flex"}}>
                        <div className="item-card">1</div>
                        <div className="item-card">2</div>
                        <div className="item-card">3</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default RestaurantMenu
