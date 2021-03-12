import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    // SELECTING CURRENT MAIL
    selectedMail: null,
    // COMPOSE MESSAGE POP UP BOX
    sendMessageIsOpen: false,                     
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

// IMPORTED AS A PARAMETER FOR useSelector()
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
