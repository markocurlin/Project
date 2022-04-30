const Modal = ({ handleModal, style }) => {
    {/*<div class="modal modal-blur fade show" id="modal-report" tabindex="-1" role="dialog" aria-modal="true" style={{display: 'block', paddingLeft: '0px'}}>*/}
    return(
        <div class="modal modal-blur fade show" id="modal-report" tabindex="-1" role="dialog" aria-modal="true" style={{display: 'block', paddingLeft: '0px'}}>
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pravdanje</h5>
                        <button type="button" onClick={handleModal} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Naziv troška</label>
                            <input type="text" class="form-control" name="example-text-input" placeholder="Naziv troška"/>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Jedinica</label>
                                    <input type="number" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Količina</label>
                                    <input type="number" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Trošak po jedinici</label>
                                    <input type="number" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Ukupan iznos</label>
                                    <input type="number" class="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Iznos dobiven iz ostalih sredstava</label>
                                    <input type="number" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Iznos koji se potražuje natječajem</label>
                                    <input type="number" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Izvor financiranja</label>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="#" onClick={handleModal} class="btn btn-link link-secondary" data-bs-dismiss="modal">
                            Otkaži
                        </a>
                        <a href="#" class="btn btn-primary ms-auto" data-bs-dismiss="modal">
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