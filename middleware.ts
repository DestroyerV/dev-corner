export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile", "/create-post", "/update-post"] };
