import SearchDialog from "./SearchDialog";
import ToggleTheme from "./ToggleTheme";
import ToggleUnits from "./ToggleUnits";

const Header = () => {
  return (
    <header className="flex items-center justify-end gap-4 pb-8">
      <SearchDialog />
      <ToggleUnits />
      <ToggleTheme />
    </header>
  );
};
export default Header;
