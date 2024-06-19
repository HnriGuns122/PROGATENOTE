import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './custombutton';
import CustomTextInput from './customTextInput';

const EditNote = ({ note, setCurrentPage, noteList, setNoteList }) => {
  const [title, setTitle] = useState(note.title);
  const [desc, setDesc] = useState(note.desc);

  const handleSaveNote = () => {
    // Update the note with new title and desc
    const updatedNote = {
      ...note,
      title: title,
      desc: desc,
    };

    // Find the index of the note in the noteList
    const updatedNoteList = noteList.map(item => {
      if (item.id === note.id) {
        return updatedNote;
      }
      return item;
    });

    // Update the note list with the updated note
    setNoteList(updatedNoteList);

    // Navigate back to home page
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Ubah Note</Text>
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
          onPress={handleSaveNote}
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

export default EditNote;
