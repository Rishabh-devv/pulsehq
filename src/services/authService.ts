import type { User } from "@/types/auth";

const DEMO_USER: User = {
  id: "1",
  name: "Rishabh Soni",
  email: "rishabh@gmail.com",
};

export const authService = {
  async login(
    email: string,
    password: string
  ): Promise<User> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    if (
      email === "rishabh@gmail.com" &&
      password === "password123"
    ) {
      return DEMO_USER;
    }

    throw new Error("Invalid email or password.");
  },
};