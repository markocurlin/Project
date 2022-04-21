const Card = ({title}) => {
    return(
        <div class='col-12'>
            <form class='card'>
                <div class='card-header'>
                    <h4 class='card-title'>{title}</h4>
                </div>
                <div class='card-body'></div>
                {/*<div class='card-footer'></div>*/}
            </form>
        </div>
    );
}

export default Card;