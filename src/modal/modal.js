import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import '../header/header.css'


class Modals extends React.Component{

    state={
        open: false,
    }
    abrirModal=()=>{
        this.setState({open: !this.state.open});
    }
   render(){ 
  return (
      <>
    <div>
    <Button color="success" onClick={this.abrirModal}>XMOD</Button>  
    </div>
    <Modal isOpen={this.state.open}>
        <ModalHeader>
            SESION
        </ModalHeader>
        <ModalBody>
            <FormGroup>
                <Label for="usuario">Usuario</Label>
                <Input type="text"/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
    </Modal>
    </>
  );
}
}
export default Modals;