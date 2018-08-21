import React from 'react';

import Header from './Header';
import DashboardWindow from './DashboardWindow';


export default function Home() {
  return (
    <div>
      <Header />
      <main role="main">
        <DashboardWindow />
      </main>
    </div>
  );
}