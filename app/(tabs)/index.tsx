import React, { useState } from 'react';
import Home from './home';
import AddNote from './addNote';
import EditNote from './editNote';
import HapusNote from './hapusNote'; // Import HapusNote component

interface NoteItem {
  id: number;
  title: string;
  desc: string;
}

interface Props {
  currentPage: string;
  noteList: NoteItem[];
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentPageWidget: React.FC<Props> = ({ currentPage, noteList, setCurrentPage }) => {
  const [noteListState, setNoteListState] = useState(noteList);

  const setNoteList = (newNoteList: NoteItem[]) => {
    setNoteListState(newNoteList);
  };

  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteListState}
          setCurrentPage={setCurrentPage}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} noteList={noteListState} setNoteList={setNoteList} />;
    case 'edit':
      // Assuming you have a way to determine the note to edit, let's say you pass the first note in the list
      return <EditNote note={noteList[0]} setCurrentPage={setCurrentPage} noteList={noteListState} setNoteList={setNoteList} />;
    case 'delete':
      // Assuming you have a way to determine the note to delete, let's say you pass the first note in the list
      return <HapusNote note={noteList[0]} setCurrentPage={setCurrentPage} noteList={noteListState} setNoteList={setNoteList} />;
    default:
      return (
        <Home
          noteList={noteListState}
          setCurrentPage={setCurrentPage}
        />
      );
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const [noteList, setNoteList] = useState<NoteItem[]>([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
    />
  );
};

export default App;
