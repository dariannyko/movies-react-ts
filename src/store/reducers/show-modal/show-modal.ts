import { SET_MODAL } from '../../actions';
import { initialModal } from './const';
import { ModalAction } from './types';

export const setModal = (state = initialModal, action: ModalAction) => {
  switch (action.type) {
    case SET_MODAL: {
      console.log('MODAL');
      
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
