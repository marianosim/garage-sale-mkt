import Spinner from 'react-bootstrap/Spinner';

function LoadSpinner() {
  return (
    <div className='d-flex justify-content-center text-center'>
      <Spinner animation="border" variant='warning' style={{ alignItems: 'center', width: '3em', height: '3em' }} />
    </div>

  )

}

export default LoadSpinner;