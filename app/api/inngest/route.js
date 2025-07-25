 import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from '../../inngest/functions';


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});