import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './paginas/Home';
import CadastroVideo from './paginas/cadastro/video'
import CadastroCategoria from './paginas/cadastro/categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const pagina404 = () => (<div>Pagina 404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

