import './container.scss';

const PageContainer = ({ children }) => {
    return (
        <div className="pageContainer">
            {children}
        </div>
    );
}

export default PageContainer;