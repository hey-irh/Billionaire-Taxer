import { useAppContext } from '../../Context';
import './Paragraphs.css';

function Paragraph({ ItemNumber, text, emoji, firstStatement }) {
  const { name, tax } = useAppContext();

  function selectFont() {
    if (ItemNumber >= 1 && ItemNumber < 50) {
      return '40px';
    } else if (ItemNumber >= 50 && ItemNumber < 300) {
      return '30px';
    } else if (ItemNumber >= 300 && ItemNumber < 600) {
      return '20px';
    } else if (ItemNumber >= 600 && ItemNumber < 900) {
      return '10px';
    } else if (ItemNumber >= 900) {
      return '5px';
    }
  }

  function renderImage() {
    if (ItemNumber > 0) {
      return (
        <p
          style={{
            fontSize: selectFont(),
            maxHeight: 500,
          }}
        >
          {/* {`${emoji} `.repeat(ItemNumber)} */}
        </p>
      );
    }
  }
  if (firstStatement) {
    return (
      <div className='paragraph'>
        <div className='statements'>
          <p>
            By taxing {name} {tax}% it could pay for:
          </p>
          <p>
            {ItemNumber} {text}
          </p>
        </div>
        <div className='rendering'>{renderImage()}</div>
      </div>
    );
  }
  firstStatement = false;
  return (
    <div className='paragraph'>
      <div className='statements'>
        <p>
          + {ItemNumber} {text}
        </p>
      </div>
      <div className='rendering'>{renderImage()}</div>
    </div>
  );
}

export default Paragraph;
