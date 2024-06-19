import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from './custombutton';
import CustomTextInput from './customTextInput';

const AddNote = ({ setCurrentPage, noteList, setNoteList }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSaveNote = () => {
    // Generate a new unique id for the new note
    const newId = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    // Create a new note object
    const newNote = {
      id: newId,
      title: title,
      desc: desc,
    };

    // Update the note list with the new note
    setNoteList([...noteList, newNote]);

    // Reset input fields after saving
    setTitle('');
    setDesc('');

    // Navigate back to home page
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={handleSaveNote} // Memanggil fungsi handleSaveNote saat tombol ditekan
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
