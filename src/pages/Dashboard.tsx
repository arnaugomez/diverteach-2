import React from 'react';

import './Dashboard.css';
import Page from '../components/Atoms/Page';
import Menu from '../components/Organisms/Menu';
import MenuItem from '../components/Molecules/MenuItem';
import {addWidget} from '../redux/actions/widgetList';
import {connect} from 'react-redux';
import Clock from '../components/Widgets/Clock';
import Whiteboard from '../components/Widgets/Whiteboard';
import Groups from '../components/Widgets/Groups';
import Notes from '../components/Widgets/Notes';
import Silence from '../components/Widgets/Silence';


interface widgetInfo {
  name: string;
  positionX: number;
  positionY: number;
}

interface Props {
  widgetList: widgetInfo[];
  addWidget: any;
}

const Dashboard: React.FC<Props> = ({widgetList, addWidget}) => {
  return (
    <Page className="dashboard">
      {widgetList.length !== 0 ? (
        widgetList.map((item, index) => {
          switch (item.name) {
            case 'clock':
              return <Clock key={index} index={index} />;
            case 'groups':
              return <Groups key={index} index={index} />;
            case 'notes':
              return <Notes key={index} index={index} />;
            case 'silence':
              return <Silence key={index} index={index} />;
            case 'whiteboard':
              return <Whiteboard key={index} index={index} />;
            default:
              return null;
          }
        })
      ) : (
        <section className="absolute-center dashboard__welcome-message">
          <h3 className="text-center">
            <span className="dashboard__welcome-message__emojis">
              👩‍🏫 👨‍🏫 ✨
            </span>
            <br />
            Tan fàcil que sembla un joc!
          </h3>
          <ol>
            <li>
              <span className="list-icon" role="img" aria-label="">
                👉
              </span>{' '}
              Clica les icones del menú i afegeix tantes eines com vulguis
            </li>
            <li>
              <span className="list-icon" role="img" aria-label="">
                👋
              </span>{' '}
              Arrossega cada eina per moure-la{' '}
              <span role="img" aria-label="">
                ↔️
              </span>{' '}
              <span role="img" aria-label="">
                ↕️
              </span>
            </li>
          </ol>
        </section>
      )}
      <Menu>
        <MenuItem
          onClick={() => addWidget('clock')}
          icon="⏰"
          description="Temporitzador"
        />
        <MenuItem
          onClick={() => addWidget('whiteboard')}
          icon="🎨"
          description="Pissarra Digital"
        />
        <MenuItem
          onClick={() => addWidget('groups')}
          icon="👥"
          description="Grups"
        />
        <MenuItem
          onClick={() => addWidget('silence')}
          icon="🤫"
          description="Silenci"
        />
        <MenuItem
          onClick={() => addWidget('notes')}
          icon="📝"
          description="Notes"
        />
      </Menu>
    </Page>
  );
};

const mapStateToProps = (state: any) => ({
  widgetList: state.widgetList,
});

export default connect(mapStateToProps, {addWidget})(Dashboard);
