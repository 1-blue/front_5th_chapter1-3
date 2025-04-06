import { createContext, useContext } from "react";
import type {
  IUser,
  INotification,
  TNotificationType,
  TTheme,
} from "#src/types";

export interface AppContextType {
  theme: TTheme;
  toggleTheme: () => void;

  user?: IUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  notifications: INotification[];

  addNotification: (message: string, type: TNotificationType) => void;
  removeNotification: (id: number) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
