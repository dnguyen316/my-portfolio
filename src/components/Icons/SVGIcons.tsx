export type IconType =
  | "react"
  | "azure"
  | "react testing"
  | "typescript"
  | "css3"
  | "html5"
  | "redux"
  | "home"
  | "contact"
  | "briefcase"
  | "circle-user"
  | "github"
  | "linkedin";

const dynamicSVGIconImports = {
  react: () => import("./React"),
  azure: () => import("./Azure"),
  "react testing": () => import("./ReactTesting"),
  typescript: () => import("./Typescript"),
  css3: () => import("./CSS"),
  html5: () => import("./HTML"),
  redux: () => import("./Redux"),
  home: () => import("./Home"),
  contact: () => import("./Contact"),
  "circle-user": () => import("./About"),
  briefcase: () => import("./Works"),
  github: () => import("./Github"),
  linkedin: () => import("./Linkedin"),
};

export { dynamicSVGIconImports as default };
