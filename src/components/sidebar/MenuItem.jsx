const MenuItem = ({ Icon, content, isSelected, onClick }) => {
  return (
    <div
      className={`menu-item w-full flex items-center justify-start cursor-pointer ${
        isSelected ? "text-sky-500" : "text-gray-600"
      }`}
      onClick={onClick}
    >
      <Icon className="ml-3" />
      <div className="menu-item-text text-l ml-3 font-black">{content}</div>
    </div>
  );
};

export default MenuItem;
