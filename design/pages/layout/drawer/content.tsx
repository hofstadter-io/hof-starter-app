public state = {
  menuItems: [
    {
      text: "menu-item-1",
      link: "#menu-item-1",
      items: [
        {
          text: "menu-1 sub-item-1",
          link: "menu-1 sub-link-1"
        },
        {
          text: "menu-1 sub-item-2",
          link: "menu-1 sub-link-2"
        }
      ],
      open: false,
      id: 1
    },
    {
      text: "menu-item-2",
      link: "#menu-item-2",
      id: 2
    },
    {
      text: "menu-item-3",
      link: "#menu-item-3",
      items: [
        {
          text: "menu-3 sub-item-1",
          link: "menu-3 sub-link-1"
        },
        {
          text: "menu-3 sub-item-2",
          link: "menu-3 sub-link-2"
        }
      ],
      open: true,
      id: 3
    }
  ]
}

public toggleOpen(id: any) {
  const newMenuItems = this.state.menuItems.map(item => {
    return item.id === id ? { ...item, open: !item.open } : { ...item }
  })
  this.setState({
    menuItems: newMenuItems
  })
}

public renderMenuSubItem(subItem) {
  return (
    <div key={subItem.text} className="menu-item-level-2">
      <NavLink to={subItem.link} ><p>{subItem.text}</p></NavLink>
    </div>
  )
}

public renderMenuItem(item: any) {
  if (item.items) {
    return (
      <div key={item.text} className="menu-item-level-1">
        <p onClick={() => this.toggleOpen(item.id)} >{item.text} {item.open ? "v" : ">"}</p>
        {item.open && item.items.map(subItem => this.renderMenuSubItem(subItem))}
      </div>
    )
  } else {
    return (
      <div key={item.text} className="menu-item-level-1">
        <NavLink to={item.link}><p>{item.text}</p></NavLink>
      </div>
    )
  }
}

public renderMenu(items: any) {
  return (
    <div className="drawer-menu">
      {items.map(item => this.renderMenuItem(item))}
    </div>
  )
}

public renderHeader() {
  return (
    <div className="drawer-header">
      <div className="drawer-logo">
        <span>Hof Studios!</span>
        <span onClick={this.props.toggle}>X</span>
      </div>
      <input placeholder="search" />
    </div>
  )
}

public render() {
  const { t, showDrawer } = this.props;
  return (
    <DrawerStyled>
      {showDrawer ? this.renderHeader() : null}
      {showDrawer ? this.renderMenu(this.state.menuItems) : null}
    </DrawerStyled>
  );
}