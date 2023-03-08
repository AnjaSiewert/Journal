import Tab from "../Tab/Tab";

export default function TabBar() {
  return (
    <ul>
      <Tab text="All Entries" number={3} />
      <Tab text="Favorites" number={1} />
    </ul>
  );
}
