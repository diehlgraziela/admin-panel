import "./card.scss";

const Card = ({ title, number, percentage, percentage_color, img }) => {
    return (
        <div className='card'>
            <div className="card-content">
                <p className='title'>{title}</p>
                <p className='number'>{number}</p>
                <p className='percentage'>
                    <span style={{ color: percentage_color === "green" ? "#43c91e" : "#e94545" }}> {percentage} </span> desde o último mês</p>
            </div>
            <div className="card-image">
                <img src={img} />
            </div>
        </div>
    );
};

export default Card;
