import qs from "qs";
import _ from "lodash";
import { QueryString } from "../types/common";

export const getSearchParams = (): QueryString => {
  const rawParams = qs.parse(_.get(window, "location.hash", "").replace("#", ""));

  for (let i = 0; i < Object.entries(rawParams).length; i += 1) {
    const [key, value] = Object.entries(rawParams)[i];
    if (Array.isArray(value)) {
      rawParams[key] = value[0];
    }
  }

  const parsedParms = _.mapKeys(rawParams, (value, key) => _.camelCase(key));
  return parsedParms;
};
