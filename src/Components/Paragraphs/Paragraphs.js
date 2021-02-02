import './Paragraphs.css';

function Paragraph({ ItemNumber, text, emoji }) {
  return (
    <div className='paragraph'>
      <div className='statements'>
        <p className='big-number'>{ItemNumber}</p>
        <p>
          {text} {emoji}
        </p>
      </div>
    </div>
  );
}

export default Paragraph;
