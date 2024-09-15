import SearchDialog from "./SearchDialog";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="flex items-center justify-end gap-4 py-4">
      <SearchDialog />
      <ToggleTheme />
    </header>
  );
};
export default Header;
