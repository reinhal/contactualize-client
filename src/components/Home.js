import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './RequiresLogin';
import DashboardWindow from './DashboardWindow';
import Header from './Header';

export function Home() {
  return (
    <div>
      <main role="main">
        <Header />
        <DashboardWindow />
      </main>
    </div>
  );
}

export default requiresLogin()(connect()(Home));