import "./card.scss";

const Card = ({ title, number, percentage, percentage_color }) => {
    return (
        <div className='card'>
            <p className='title'>{title}</p>
            <p className='number'>{number}</p>
            <p className='percentage'>
                <span style={{ color: percentage_color === "green" ? "#43c91e" : "#e94545" }}> {percentage} </span> desde o último mês</p>
        </div>
    );
};

export default Card;
