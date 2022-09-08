import { router } from "@trpc/server";
import { tbaTeamRouter } from "./tba-team";
import { tbaMatchRouter } from "./tba-match";
import { tbaDistrictRouter } from "./tba-district";
import { tbaEventRouter } from "./tba-event";
import { tbaServiceRouter } from "./tba-service";

export const tbaRouter = router()
  .merge("tba.district.", tbaDistrictRouter)
  .merge("tba.event.", tbaEventRouter)
  .merge("tba.match.", tbaMatchRouter)
  .merge("tba.service.", tbaServiceRouter)
  .merge("tba.team.", tbaTeamRouter);

// export type definition of API
export type AppRouter = typeof tbaRouter;
