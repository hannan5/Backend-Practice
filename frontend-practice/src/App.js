import './App.scss';

function App() {
  let a = 1;
  let b = 1;
  console.log(a)
  console.log(b)
  a = a++;
  b = ++b;
  console.log(a,'a++')
  console.log(b,'++b')
  return (
    <div className="App">
      <div className='header'>
        <div className='header_left'>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        <div className='header_right'>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        </div>
      </div>
    </div>
  );
}

export default App;