import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  activeResumeId: string | null;
  template: "modern" | "minimal" | "executive" | "creative" | "corporate";
  isDirty: boolean;
}

const initialState: ResumeState = {
  activeResumeId: null,
  template: "modern",
  isDirty: false,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setActiveResume(state, action: PayloadAction<string>) {
      state.activeResumeId = action.payload;
    },
    setTemplate(state, action: PayloadAction<ResumeState["template"]>) {
      state.template = action.payload;
    },
    markDirty(state, action: PayloadAction<boolean>) {
      state.isDirty = action.payload;
    },
  },
});

export const { setActiveResume, setTemplate, markDirty } = resumeSlice.actions;
export default resumeSlice.reducer;
