// import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        if (profile?.email == "healthx360.business@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      //   @ts-ignore
      clientId: process.env.GOOGLE_ID,
      //   @ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
