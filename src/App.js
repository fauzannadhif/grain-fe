import { useQuery } from "@apollo/client";
import { getAllMenus } from "./queries";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  const { loading, error, data } = useQuery(getAllMenus)
  const [modalItem, setModalItem] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {setModalOpen(false); setModalItem({})}
  const open = (item) => {setModalOpen(true); setModalItem(item)}

  if (loading) return <p>Loading...</p>

  if (modalOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <div className="App">
      <div className="flex-box">
        <Sidebar sections={data.menus[0].sections}/>
        {data?.menus?.map(menu => 
          <div key={menu.id}>
            {menu.sections?.map(section =>
              <section key={section.id}>
                <Container style={{paddingBottom: 20, paddingTop: 20}}>
                  <div>
                    <h4 className="font-link">
                      {section.label}
                    </h4>
                    <h6 className="font-link">
                      {section.description}
                    </h6>
                  </div>
                  <Row>
                    {section.items?.map(item =>
                      <Col sm={6} key={item.id}>
                          <ItemCard item={item} key={item.id} onOpen={() => open(item)}/>
                      </Col>
                    )}
                  </Row>
                </Container>
              </section>
            )}
          </div>
        )}
      </div>
      <AnimatePresence>
        {modalOpen && <Modal modalItem={modalItem} handleClose={close} />}
        
      </AnimatePresence>

    </div>
  )
}

export default App;
