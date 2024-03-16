const dynamicSVGIconImports = {
  react: () => import("./React"),
  azure: () => import("./Azure"),
  "react testing": () => import("./ReactTesting"),
  typescript: () => import("./Typescript"),
  css3: () => import("./CSS"),
  html5: () => import("./HTML"),
  redux: () => import("./Redux"),
};

export { dynamicSVGIconImports as default };
