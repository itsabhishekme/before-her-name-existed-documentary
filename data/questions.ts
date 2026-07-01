export interface Question {
  id: number;
  question: string;
  type: "radio" | "textarea";
  options?: string[];
  placeholder?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "Have you ever felt connected to someone before meeting them?",
    type: "radio",
    options: ["Yes", "No", "Unsure"],
  },
  {
    id: 2,
    question:
      "Have you experienced recurring dreams about an unknown person?",
    type: "textarea",
    placeholder:
      "Describe your dreams, emotions, or recurring experiences...",
  },
  {
    id: 3,
    question:
      "Have meaningful coincidences ever led you toward someone important?",
    type: "textarea",
    placeholder:
      "Share any coincidences or unexpected events that later became meaningful...",
  },
  {
    id: 4,
    question:
      "Do you believe destiny plays a role in relationships?",
    type: "radio",
    options: ["Yes", "No", "Maybe"],
  },
  {
    id: 5,
    question:
      "Have you ever experienced an instant recognition when meeting someone for the first time?",
    type: "radio",
    options: ["Yes", "No", "Not Sure"],
  },
  {
    id: 6,
    question:
      "Describe a moment that changed your life before you understood its meaning.",
    type: "textarea",
    placeholder:
      "Tell us about an experience that only made sense later in life...",
  },
  {
    id: 7,
    question:
      "If your story became part of this documentary, what message would you want the world to hear?",
    type: "textarea",
    placeholder:
      "Share the message you hope others will take away from your experience...",
  },
];