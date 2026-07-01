export interface QuestionnaireForm {
  // Personal Information
  fullName: string;
  email: string;
  age: string;
  country: string;

  // Questionnaire
  q1: "Yes" | "No" | "Unsure";
  q2: string;
  q3: string;
  q4: "Yes" | "No" | "Maybe";
  q5: "Yes" | "No" | "Not Sure";
  q6: string;
  q7: string;

  // Consent
  consent: boolean;
}

export interface DocumentaryPillar {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  active: boolean;
}

export interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
}

export interface Question {
  id: number;
  question: string;
  type: "radio" | "textarea";
  options?: string[];
}