import SearchDialog from "./SearchDialog";
import Settings from "./Settings";

const Header = () => {
  return (
    <header className="flex items-center justify-end gap-4 pb-8">
      <SearchDialog />
      <Settings />
    </header>
  );
};
export default Header;
