import "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;                     // Your custom field
    } & DefaultSession["user"];       // Merge with default user fields
  }

  interface JWT extends DefaultJWT {
    id: string;
  }
}
