import './App.scss';

function App() {
  return (
    <>
      <div className='hero'>
        <img src='hero.png' alt='hero' />
        <div className='left'>
          <h1>The Smart
            Choice For Future
          </h1>
          <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
          <div className='search-bar'>
            <div className='find'>
              <img src='mirror.svg' alt='search' />
              <input type='text' placeholder='Search for a course' />
            </div>
            <button className='btn-primary'>Continue</button>
          </div>
        </div>
        <div className='right'>
          <img src='right.png' alt='right' />
        </div>
      </div>
    </>
  );
}

export default App;
