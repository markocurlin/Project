//import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    if (modalState === true) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  };

  return (
    <>
      <head>
        <script src="https://unpkg.com/@tabler/core@1.0.0-beta9/dist/js/tabler.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/@tabler/core@1.0.0-beta9/dist/css/tabler.min.css"></link>
      </head>

      <body class='theme-light'>
        <div class='page'> 
          <header class="navbar navbar-expand-md navbar-light d-print-none">
            {/* Rjesi navbar */}
          </header>
          <div class='navbar-expand-md'></div>
          <div class='page-wrapper'>
            <Header handleModal={handleModal}/>
            
            <div class='page-body'>
              <div class='container-xl'>
                <div class='row row-cards'>
                  <Card title='Troškovi provedbe aktivnosti'/>
                  <Card title='Troškovi opreme'/>
                  <Card title='Troškovi promocije'/>
                  <Card title='Putni troškovi'/>
                </div>
              </div>
            </div>

            <footer class="footer footer-transparent d-print-none">
              <div class='container-xl'>
                <div class="row text-center align-items-center flex-row-reverse">
                  <div class="col-lg-auto ms-lg-auto">
                    <ul class="list-inline list-inline-dots mb-0">
                      <li class="list-inline-item"><a href="" class="link-secondary">Link</a></li>
                      <li class="list-inline-item"><a href="" class="link-secondary">Link</a></li>
                      <li class="list-inline-item"><a href="" target="_blank" class="link-secondary" rel="noopener">Link</a></li>
                      <li class="list-inline-item"><a href="" target="_blank" class="link-secondary" rel="noopener">Link</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul class="list-inline list-inline-dots mb-0">
                    <li class="list-inline-item">
                      Copyright © 2022
                      <a href="." class="link-secondary">_DODATI_</a>.
                      All rights reserved.
                    </li>
                  </ul>
                </div>
              </div>
            </footer>

          </div>
        </div>
        { modalState === false ?  <></> : <Modal handleModal={handleModal}/>}
      </body>
    </>
  );
}

export default App;
