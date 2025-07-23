import { serve } from "inngest/next"; // or "inngest" depending on setup
import { helloWorld } from "./functions";

export const handler = serve("My App", [helloWorld]);
