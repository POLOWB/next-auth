import authConfig from "./auth.config";
import NextAuth from "next-auth";

const {auth} = NextAuth(authConfig);

export default auth((req)=>{
  const isLoggedIn = !!req.auth

  console.log("ROUTE: ",req.nextUrl.pathname)
  console.log("IS LOGGEDIN:", isLoggedIn);
})

//optionally, don't invoke middleware on some paths

export const config = {
  matcher:[    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',]
}