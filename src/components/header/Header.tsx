import SearchDialog from "./search-dialog/SearchDialog";
import Settings from "./settings/Settings";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 pb-4 md:pb-8">
      <SearchDialog />
      <Settings />
    </header>
  );
};
export default Header;
