import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from './hooks/useCounter';
import SimpleForm from './2-useEffect/SimpleForm'
import FormWithCustomHook from './3-formWithCustomHook/FormWithCustomHook';
import MultiplesCustomHooks from './4-examples/MultiplesCustomHooks';
import HeaderComponent from './components/header/header.component';

function App() {
  const [count, setCount] = useState(0);

  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section className='banner' id='banner'>
        <div className='content'>
          <h2>Alway choose good</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Saepe temporibus hic ullam quia veritatis atque numquam sunt,
            commodi vitae, quae inventore est. Nulla voluptates vero voluptatibus similique,
            amet error adipisci?
          </p>
          <a href="#" className='btn'>our mennu</a>
        </div>
      </section>

      <section className='about' id='about'>
        <div className='row'>
          <div className='col50'>
            <h2 className='titleText'><span>A</span>bout Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores perferendis eligendi fugit amet tempora minima atque aliquam facilis illo itaque voluptas dolor dolore accusamus labore porro adipisci, debitis, a eveniet?<br/><br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi vel a, odit dignissimos omnis neque? Ut excepturi sunt unde neque reiciendis nemo qui aliquam, atque dolor et quos magnam!
            </p>
          </div>
          <div className='col50'>
            <div className='imgBx'>
              <img src={reactLogo} alt="React logo" />
            </div>
          </div>
        </div>
      </section>

      <hr />
      <hr />


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <hr />
        <h2>Implement secont</h2>
        <p>Counte: {counter}</p>
        <button onClick={() => increment()}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => decrement()}>-1</button>

        <SimpleForm></SimpleForm>

        <br />
        <hr />
        <div>
          <h3>Etiquetas</h3>
          <figure>
            <img src={viteLogo} alt="Vite logo" />
            <figcaption>Fig. 1 - Gráfica progreso mensual</figcaption>
          </figure>

          <h5>Details y Summary</h5>
          <details>
            <summary>Playa de Cortadura</summary>
            <p>Un texto explicando sobre cortadura...</p>
          </details>
        </div>

        <br />
        <hr />
        <div>
          <form id='fruits'>
            <label htmlFor="fruit-input">Favorite Fruit?</label>
            <input type="text" id='fruit-input' list='fruit-list' placeholder='e.g. Mongo' />
            <datalist id='fruit-list'>
              <option value="Apple"></option>
              <option value="Kiwi"></option>
              <option value="Orange"></option>
              <option value="Banana"></option>
            </datalist>
          </form>
        </div>

        <div>
          <FormWithCustomHook></FormWithCustomHook>
        </div>
        <br />
        <hr />
        <MultiplesCustomHooks></MultiplesCustomHooks>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className='copyrightText'>
        <p>Copyright 2024. All Right Reserved</p>
      </div>
    </>
  )
}

export default App
