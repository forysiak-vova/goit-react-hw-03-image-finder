import { Grid } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Loader() {
  return (
    <div>
      <Grid color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
