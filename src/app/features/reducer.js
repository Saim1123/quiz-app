import { createSlice } from "@reduxjs/toolkit";
import questions from "../../data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  correctAnswerCount: 0,
};

const counterSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      if (
        state.questions[state.currentQuestionIndex].correct_answer ===
        action.payload
      ) {
        state.correctAnswerCount += 1;
      }
      state.currentQuestionIndex += 1;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { nextQuestion, reset } = counterSlice.actions;
export default counterSlice.reducer;
