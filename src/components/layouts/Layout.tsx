import { useAppContext } from "#src/hooks/useAppContext";
import Header from "#src/components/layouts/Header";
import NotificationSystem from "#src/components/common/NotificationSystem";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useAppContext();

  return (
    <div
      className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
    >
      <Header />
      {children}
      <NotificationSystem />
    </div>
  );
};

export default Layout;
