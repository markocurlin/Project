import { useState } from 'react';

const Modal = ({ handleModal, handleData, style, display }) => {
    const [data, setData] = useState({
        expense: '',
        unit: 0,
        amount: 0,
        unitCost: 0,
        totalAmount: 0,
        assetsAmount: 0,
        tenderAmount: 0,
        fundingSource: '',
    });

    const [category, setCategory] = useState("");

    const handleInput = (event) => {
        const { name, value } = event.target;

        const newData = data;
        
        newData[name] = value;
       
        setData(newData);
    }

    const handleRadioButton = (event) => {
        const name = event.target.name;
        setCategory(name)
    }

    const handleButton = () => {
        handleData(category, data);
        handleModal();
    }

    return(
        <div className={`modal modal-blur fade ${style}`} id="modal-report" tabIndex="-1" role="dialog" aria-modal="true" style={{display: `block`, paddingLeft: '0px', zIndex: `${display}`}}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Pravdanje</h5>
                        <button type="button" className="btn-close" onClick={handleModal} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Naziv troška</label>
                            <input type="text" className="form-control" onChange={handleInput} name="expense" placeholder="Naziv troška"/>
                        </div>
                        <div className="form-selectgroup-boxes row mb-3">
                            <div className="col-lg-6">
                                <label className="form-selectgroup-item">
                                    <input type="radio" name="activityCost" value="1" className="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span className="form-selectgroup-label d-flex align-items-center p-3">
                                        <span className="me-3">
                                            <span className="form-selectgroup-check"></span>
                                        </span>
                                        <span className="form-selectgroup-label-content">
                                            <span className="form-selectgroup-title strong mb-1">Troškovi provedbe aktivnosti</span>
                                            <span className="d-block text-muted">Provide only basic data needed for the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-selectgroup-item">
                                    <input type="radio" name="equipmentCost" value="1" className="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span className="form-selectgroup-label d-flex align-items-center p-3">
                                        <span className="me-3">
                                            <span className="form-selectgroup-check"></span>
                                        </span>
                                        <span className="form-selectgroup-label-content">
                                            <span className="form-selectgroup-title strong mb-1">Troškovi opreme</span>
                                            <span className="d-block text-muted">Insert charts and additional advanced analyses to be inserted in the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="form-selectgroup-boxes row mb-3">
                            <div className="col-lg-6">
                                <label className="form-selectgroup-item">
                                    <input type="radio" name="promotionCost" value="1" className="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span className="form-selectgroup-label d-flex align-items-center p-3">
                                        <span className="me-3">
                                            <span className="form-selectgroup-check"></span>
                                        </span>
                                        <span className="form-selectgroup-label-content">
                                            <span className="form-selectgroup-title strong mb-1">Troškovi promocije</span>
                                            <span className="d-block text-muted">Provide only basic data needed for the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-selectgroup-item">
                                    <input type="radio" name="travelExpenses" value="1" className="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span className="form-selectgroup-label d-flex align-items-center p-3">
                                        <span className="me-3">
                                            <span className="form-selectgroup-check"></span>
                                        </span>
                                        <span className="form-selectgroup-label-content">
                                            <span className="form-selectgroup-title strong mb-1">Putni troškovi</span>
                                            <span className="d-block text-muted">Insert charts and additional advanced analyses to be inserted in the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Jedinica</label>
                                    <input type="number" className="form-control" onChange={handleInput} name="unit"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Količina</label>
                                    <input type="number" className="form-control" onChange={handleInput} name="amount"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Trošak po jedinici</label>
                                    <input type="number" className="form-control" onChange={handleInput} name="unitCost"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Ukupan iznos</label>
                                    <input type="number" className="form-control" onChange={handleInput} name="totalAmount"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Iznos dobiven iz ostalih sredstava</label>
                                    <input type="number" className="form-control" onChange={handleInput} name="assetsAmount"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Iznos koji se potražuje natječajem</label>
                                    <input type="number" className="form-control" onChange={handleInput} name="tenderAmount"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div>
                                    <label className="form-label">Izvor financiranja</label>
                                    <textarea className="form-control" onChange={handleInput}  name="fundingSource" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="btn btn-link link-secondary" onClick={handleModal} data-bs-dismiss="modal">
                            Otkaži
                        </a>
                        <a href="#" className="btn btn-primary ms-auto" onClick={handleButton} data-bs-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                Spremi
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;