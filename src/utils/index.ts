import { inspect } from "util";

const stringifyPretty = (arg: any, depth = 2): string =>
  inspect(arg, true /* showHidden */, depth, true);

  export { stringifyPretty }