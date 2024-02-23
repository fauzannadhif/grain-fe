import { useQuery } from "@apollo/client";
import { getAllMenus } from "./queries";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css'

const App = () => {
  const { loading, error, data } = useQuery(getAllMenus)

  if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      <div class="flex-box">
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
                          <ItemCard item={item} key={item.id}/>
                      </Col>
                    )}
                  </Row>
                </Container>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
