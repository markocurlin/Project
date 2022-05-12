import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {
  const [data, setData] = useState({
    activityCost: [],
    equipmentCost: [],
    promotionCost: [],
    travelExpenses: [],
  });
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    if (modalState === true) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  };

  const handleData = (category, dataFromModal) => {
    const newData = data;

    newData[category].push(dataFromModal);

    setData(newData);
  }

  return (
    <>
      <head>
        <script src="https://unpkg.com/@tabler/core@1.0.0-beta9/dist/js/tabler.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/@tabler/core@1.0.0-beta9/dist/css/tabler.min.css"></link>
      </head>

      <body className='theme-light'>
        <div className='page'> 
          <header className="navbar navbar-expand-md navbar-light d-print-none">
            {/* Rjesi navbar */}
          </header>
          <div className='navbar-expand-md'></div>
          <div className='page-wrapper'>
            <Header handleModal={handleModal}/>
            
            <div className='page-body'>
              <div className='container-xl'>
                <div className='row row-cards'>
                  <Card title='Troškovi provedbe aktivnosti' data={data.activityCost}/>
                  <Card title='Troškovi opreme' data={data.equipmentCost}/>
                  <Card title='Troškovi promocije' data={data.promotionCost}/>
                  <Card title='Putni troškovi' data={data.travelExpenses}/>
                </div>
              </div>
            </div>

            <footer className="footer footer-transparent d-print-none">
              <div className='container-xl'>
                <div className="row text-center align-items-center flex-row-reverse">
                  <div className="col-lg-auto ms-lg-auto">
                    <ul className="list-inline list-inline-dots mb-0">
                      <li className="list-inline-item"><a href="" className="link-secondary">Link</a></li>
                      <li className="list-inline-item"><a href="" className="link-secondary">Link</a></li>
                      <li className="list-inline-item"><a href="" target="_blank" className="link-secondary" rel="noopener">Link</a></li>
                      <li className="list-inline-item"><a href="" target="_blank" className="link-secondary" rel="noopener">Link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      Copyright © 2022
                      <a href="." className="link-secondary">_DODATI_</a>.
                      All rights reserved.
                    </li>
                  </ul>
                </div>
              </div>
            </footer>

          </div>
        </div>
        <Modal handleModal={handleModal} handleData={handleData} style={ modalState === true ? "show" : ""} display={ modalState === true ? "1055" : "-3"}/>
      </body>
    </>
  );
}

export default App;
