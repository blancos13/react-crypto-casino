import { InitialBetContextProps } from 'types/bet';
import { createSlice } from '@reduxjs/toolkit';

const initialCurrency = {
    symbol: '',
    icon: ''
};

const initialUser = {
    avatar: '',
    username: '',
    winner: ''
};

const initialState: InitialBetContextProps = {
    user1: initialUser,
    gameId: 0,
    currency: initialCurrency,
    balance: 0
};

const bet = createSlice({
    name: 'bet',
    initialState,
    reducers: {
        CreateRoom(state, action: any) {
            state = action.payload;
        }
    }
});

export default bet.reducer;

export const { CreateRoom } = bet.actions;
