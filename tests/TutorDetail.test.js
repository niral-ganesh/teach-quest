import React from "react";
import { render } from "@testing-library/react-native";
import TutorDetail from "../app/screens/TutorDetail";

describe("TutorDetail", () => {
  const tutorData = {
    id: "123",
    name: "John Doe",
    profilePicture: "https://example.com/profile-picture.jpg",
    age: "26-35 years",
    experience: "3-5 year",
    gender: "Male",
    subject: "Math",
    ratePerHour: 50,
    contact: "john.doe@example.com",
    description: "I am a math tutor with 5 years of experience.",
    averageRating: 4,
  };

  it("renders correctly", () => {
    const tree = render(<TutorDetail route={{ params: { tutorData } }} />);
    expect(tree).toBeTruthy();
  });
});
