import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './custombutton'; // Pastikan Anda menyesuaikan nama file dengan casing yang benar

const HapusNote = ({ note, setCurrentPage, noteList, setNoteList }) => {
  const handleHapusNote = () => {
    // Filter catatan yang tidak sama dengan catatan yang akan dihapus
    const updatedNoteList = noteList.filter(item => item.id !== note.id);
    
    // Update state noteList dengan catatan yang telah dihapus
    setNoteList(updatedNoteList);
    
    // Kembali ke halaman home setelah menghapus
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Hapus Note</Text>
      <View style={styles.noteDetails}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteDesc}>{note.desc}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          width="100%"
          onPress={handleHapusNote}
        />
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Batal"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  noteDetails: {
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#203239',
  },
  noteDesc: {
    fontSize: 16,
    color: '#39494F',
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export default HapusNote;
