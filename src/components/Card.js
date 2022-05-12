const Card = ({title, data}) => {
    return(
        <div className='col-12'>
            <form className='card'>
                <div className='card-header'>
                    <h4 className='card-title'>{title}</h4>
                </div>
                <div className='card-body'>
                    { data.length === 0 ? <><p>Prazno</p></> : 
                    data.map(text => {
                        return(
                        <div className='card'>
                            <div className='card-body'>
                                <div className="form-control-plaintext">Naziv troška: {text.expense}</div>
                                <div className="form-control-plaintext">Jedinica: {text.unit}</div>
                                <div className="form-control-plaintext">Količina: {text.amount}</div>
                                <div className="form-control-plaintext">Trošak po jedinici: {text.unitCost}</div>
                                <div className="form-control-plaintext">Ukupan iznos: {text.totalAmount}</div>
                                <div className="form-control-plaintext">Iznos dobiven iz ostalih sredstava: {text.assetsAmount}</div>
                                <div className="form-control-plaintext">Iznos koji se potražuje natječajem: {text.tenderAmount}</div>
                                <div className="form-control-plaintext">Izvor financiranja: {text.fundingSource}</div>
                            </div>
                        </div>
                    )})}
                </div>
                {/*<div class='card-footer'></div>*/}
            </form>
        </div>
    );
}

export default Card;