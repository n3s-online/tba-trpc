import { router } from "@trpc/server";
import { OpenAPI, TbaService } from "tba-api-v3client-ts";
import { ifModifiedSinceZod } from "../utils/tba_zod";

// Pull TBA key from environment variable and set as header value
OpenAPI.HEADERS = {
  "X-TBA-Auth-Key": process.env.TBA_KEY || "",
};

export const tbaServiceRouter = router().query("getStatus", {
  input: ifModifiedSinceZod,
  async resolve({ input }) {
    return await TbaService.getStatus(input.ifModifiedSince);
  },
});
