import { useState } from "react";

import { AppContext, AppContextType } from "#src/hooks/useAppContext";
import type {
  INotification,
  IUser,
  TNotificationType,
  TTheme,
} from "#src/types";

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<TTheme>("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [notifications, setNotifications] = useState<INotification[]>([]);
  const addNotification = (message: string, type: TNotificationType) => {
    const newNotification: INotification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const [user, setUser] = useState<IUser | null>(null);
  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  };
  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  };

  const contextValue: AppContextType = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
