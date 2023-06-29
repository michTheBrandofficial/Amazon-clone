import './Loader.css';

const ScreenSpinner = () => {
  return (
    <div className="lds-spinner">
      {
        Array(12).fill('').map(_ => <div></div>)
      }
    </div>
  );
};

export default ScreenSpinner;
