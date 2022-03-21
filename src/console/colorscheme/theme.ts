export type ThemeProperties = {
  completionTitleBackground: string;
  completionTitleForeground: string;
  completionItemBackground: string;
  completionItemForeground: string;
  completionItemDescriptionForeground: string;
  completionSelectedBackground: string;
  completionSelectedForeground: string;
  commandBackground: string;
  commandForeground: string;
  consoleErrorBackground: string;
  consoleErrorForeground: string;
  consoleInfoBackground: string;
  consoleInfoForeground: string;
};

export const LightTheme: ThemeProperties = {
  completionTitleBackground: "lightgray",
  completionTitleForeground: "#000000",
  completionItemBackground: "#ffffff",
  completionItemForeground: "#000000",
  completionItemDescriptionForeground: "#008000",
  completionSelectedBackground: "#ffff00",
  completionSelectedForeground: "#000000",
  commandBackground: "#ffffff",
  commandForeground: "#000000",
  consoleErrorBackground: "#ff0000",
  consoleErrorForeground: "#ffffff",
  consoleInfoBackground: "#ffffff",
  consoleInfoForeground: "#018786",
};

export const DarkTheme: ThemeProperties = {
  completionTitleBackground: "#191724",
  completionTitleForeground: "white",
  completionItemBackground: "#2a273f",
  completionItemForeground: "white",
  completionItemDescriptionForeground: "#86fab0",
  completionSelectedBackground: "#ffffff",
  completionSelectedForeground: "#000000",
  commandBackground: "#2a273f",
  commandForeground: "white",
  consoleErrorBackground: "#eb6f92",
  consoleErrorForeground: "white",
  consoleInfoBackground: "#fff",
  consoleInfoForeground: "#ffffff",
};
