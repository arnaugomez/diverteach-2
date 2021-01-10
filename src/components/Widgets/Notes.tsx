import React, {useState} from 'react';
import Widget from './Widget';

import './Notes.css';

const randomColors = ['#264653', '#33C1B1', '#E9C46A', '#F4A261', '#E76F51'];

const Notes: React.FC<{index: number}> = ({index}) => {
  const [notesList, setNotesList] = useState([
    {
      title: 'Nova nota',
      content: 'Escriu la teva primera nota',
      color: randomColors[Math.floor(Math.random() * randomColors.length)],
    },
  ]);
  const [currentNote, setCurrentNote] = useState(0);
  return (
    <Widget className="notes-widget" index={index}>
      <nav className="notes-widget__menu">
        {notesList.map((item, index) => (
          <button
            onClick={() => setCurrentNote(index)}
            style={{backgroundColor: item.color}}
            className="notes-widget__menu__snippet"
            key={index}
          >
            {item.title}
          </button>
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            setNotesList([
              ...notesList,
              {
                title: 'Nova nota',
                content: 'Escriu la teva primera nota',
                color:
                  randomColors[Math.floor(Math.random() * randomColors.length)],
              },
            ])
          }
          className="notes-widget__new-note-icon"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={notesList[notesList.length - 1].color}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      </nav>

      {notesList
        .filter((_item, index) => index === currentNote)
        .map((item) => (
          <section>
            <h3>
              <input
                style={{color: item.color}}
                value={item.title}
                onChange={(e) => {
                  setNotesList(
                    notesList.map((item, index) => {
                      if (index == currentNote) {
                        return {
                          ...item,
                          title: e.target.value,
                        };
                      } else {
                        return item;
                      }
                    })
                  );
                }}
                className="notes-widget__title-input"
                type="text"
              />
            </h3>
            <textarea
              onChange={(e) => {
                setNotesList(
                  notesList.map((item, index) => {
                    if (index == currentNote) {
                      return {
                        ...item,
                        content: e.target.value,
                      };
                    } else {
                      return item;
                    }
                  })
                );
              }}
              value={item.content}
              className="notes-widget__content-input"
            />
          </section>
        ))}
    </Widget>
  );
};

export default React.memo(Notes);
