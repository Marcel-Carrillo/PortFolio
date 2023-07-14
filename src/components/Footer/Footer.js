import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Row } from "react-bootstrap";

export const Footer = () => {
    return(
        <Row className="m-0 w-100">
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footerF'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Todos los derechos reservados®</span>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Hasta pronto
              </h6>
              <p>
                Muchas gracias por visitarme, cualquier consulta al respecto del contenido estaré encantado de resolverlo.
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-3' />
                Benalmádena , Málaga
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                mcarhue.ti@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +34 654703621
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 -
        <a className='text-reset fw-bold' href="#Home">
          Marcel Carrillo Huerta-
        </a>
        <p>Version 1.02</p>
      </div>
    </MDBFooter>
        </Row>
    )
}


