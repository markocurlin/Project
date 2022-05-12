const Header = ({handleModal}) => {
    return (
        <div className="container-xl">
            <div className="page-header d-print-none">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        <div className="page-pretitle">
                            Novi
                        </div>
                        <h2 className="page-title">
                            Financijski plan
                        </h2>
                    </div>
                    <div className="col-12 col-md-auto ms-auto d-print-none">
                        <div className="btn-list">
                        <span className="d-none d-sm-inline">
                            <a href="#" className="btn btn-white">
                            Preuzmi
                            </a>
                        </span>
                        <a href="#" onClick={handleModal} className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            Dodaj stavku
                        </a>
                        <a href="#" className="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;