import React from 'react';

import DashboardWindow from './DashboardWindow';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <main role="main">
        <Header />
        <DashboardWindow />
      </main>
    </div>
  );
}