import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './chart.scss';

const ProgressBar = () => {
    return (
        <div className="progress-bar chart">
            <div className="chart-header">
                <h3 className="chart-title">Meta mensal</h3>
            </div>

            <div className="chart-content">
                <CircularProgressbar className="circular-progress-bar" value={50} text={"50%"} />
                <p>Vendas concluídas até o momento</p>
                <p className="number">$349,50</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default ProgressBar;