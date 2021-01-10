import React from 'react';

import './Dashboard.css';
import Page from '../components/Atoms/Page';
import Menu from '../components/Organisms/Menu';
import MenuItem from '../components/Molecules/MenuItem';

const Dashboard = () => {
  return (
    <Page className="dashboard">
      <Menu>
        <MenuItem icon="⏰" description="Temporitzador" />
        <MenuItem icon="🎨" description="Pissarra Digital" />
        <MenuItem icon="👥" description="Grups" />
        <MenuItem icon="🤫" description="Silenci" />
        <MenuItem icon="📝" description="Notes" />
      </Menu>
    </Page>
  );
};

export default Dashboard;
