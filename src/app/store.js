import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/reducer";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
