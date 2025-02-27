const MenuItem = ({ Icon, content }) => {
  return (
    <div className="menu-item w-full   flex items-center justify-start">
      <Icon className="ml-3" />
      <div className="menu-item-text text-l ml-3 font-black">{content}</div>
    </div>
  );
};

export default MenuItem;
