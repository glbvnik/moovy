import { ComponentType } from "react";
import Film from "../pages/Film";
import Home from "../pages/Home";
import Rated from "../pages/Rated";

export interface IRoute {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = "/",
  FILM = "/film/:imdbId",
  RATED = "/rated",
}

export const routes: IRoute[] = [
  { path: RouteNames.HOME, component: Home, exact: true },
  { path: RouteNames.FILM, component: Film },
  { path: RouteNames.RATED, component: Rated, exact: true },
];
