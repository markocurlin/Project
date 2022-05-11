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
    }

    return(
        <div class={`modal modal-blur fade ${style}`} id="modal-report" tabindex="-1" role="dialog" aria-modal="true" style={{display: `block`, paddingLeft: '0px', zIndex: `${display}`}}>
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pravdanje</h5>
                        <button type="button" class="btn-close" onClick={handleModal} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Naziv troška</label>
                            <input type="text" class="form-control" onChange={handleInput} name="expense" placeholder="Naziv troška"/>
                        </div>
                        <div class="form-selectgroup-boxes row mb-3">
                            <div class="col-lg-6">
                                <label class="form-selectgroup-item">
                                    <input type="radio" name="activityCost" value="1" class="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span class="form-selectgroup-label d-flex align-items-center p-3">
                                        <span class="me-3">
                                            <span class="form-selectgroup-check"></span>
                                        </span>
                                        <span class="form-selectgroup-label-content">
                                            <span class="form-selectgroup-title strong mb-1">Troškovi provedbe aktivnosti</span>
                                            <span class="d-block text-muted">Provide only basic data needed for the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-selectgroup-item">
                                    <input type="radio" name="equipmentCost" value="1" class="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span class="form-selectgroup-label d-flex align-items-center p-3">
                                        <span class="me-3">
                                            <span class="form-selectgroup-check"></span>
                                        </span>
                                        <span class="form-selectgroup-label-content">
                                            <span class="form-selectgroup-title strong mb-1">Troškovi opreme</span>
                                            <span class="d-block text-muted">Insert charts and additional advanced analyses to be inserted in the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="form-selectgroup-boxes row mb-3">
                            <div class="col-lg-6">
                                <label class="form-selectgroup-item">
                                    <input type="radio" name="promotionCost" value="1" class="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span class="form-selectgroup-label d-flex align-items-center p-3">
                                        <span class="me-3">
                                            <span class="form-selectgroup-check"></span>
                                        </span>
                                        <span class="form-selectgroup-label-content">
                                            <span class="form-selectgroup-title strong mb-1">Troškovi promocije</span>
                                            <span class="d-block text-muted">Provide only basic data needed for the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-selectgroup-item">
                                    <input type="radio" name="travelExpenses" value="1" class="form-selectgroup-input" onClick={handleRadioButton}/>
                                    <span class="form-selectgroup-label d-flex align-items-center p-3">
                                        <span class="me-3">
                                            <span class="form-selectgroup-check"></span>
                                        </span>
                                        <span class="form-selectgroup-label-content">
                                            <span class="form-selectgroup-title strong mb-1">Putni troškovi</span>
                                            <span class="d-block text-muted">Insert charts and additional advanced analyses to be inserted in the report</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Jedinica</label>
                                    <input type="number" class="form-control" onChange={handleInput} name="unit"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Količina</label>
                                    <input type="number" class="form-control" onChange={handleInput} name="amount"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Trošak po jedinici</label>
                                    <input type="number" class="form-control" onChange={handleInput} name="unitCost"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Ukupan iznos</label>
                                    <input type="number" class="form-control" onChange={handleInput} name="totalAmount"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Iznos dobiven iz ostalih sredstava</label>
                                    <input type="number" class="form-control" onChange={handleInput} name="assetsAmount"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Iznos koji se potražuje natječajem</label>
                                    <input type="number" class="form-control" onChange={handleInput} name="tenderAmount"/>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Izvor financiranja</label>
                                    <textarea class="form-control" onChange={handleInput}  name="fundingSource" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="#" onClick={handleModal} class="btn btn-link link-secondary" data-bs-dismiss="modal">
                            Otkaži
                        </a>
                        <a href="#" class="btn btn-primary ms-auto" onClick={handleButton} data-bs-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                Spremi
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;